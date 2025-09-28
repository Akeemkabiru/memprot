"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Loader2, RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import { Stage } from "ngl";

interface MolecularViewerProps {
  pdbId?: string;
  onLoadComplete?: (structure: unknown) => void;
  onLoadError?: (error: string) => void;
}

export function ProteinStructure({
  pdbId,
  onLoadComplete,
  onLoadError,
}: MolecularViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<Stage | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const stage = new Stage(containerRef.current, {
      backgroundColor: "hsl(220, 25%, 6%)",
      quality: "high",
      sampleLevel: 2,
    });
    stageRef.current = stage;

    const handleResize = () => stage.handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      stage.dispose();
      stageRef.current = null;
    };
  }, []);

  /** Load PDB structure */
  const loadStructure = useCallback(
    async (id: string) => {
      if (!stageRef.current) return;
      setIsLoading(true);
      setError(null);

      try {
        const stage = stageRef.current;
        stage.removeAllComponents();

        const structure = await stage.loadFile(
          `https://files.rcsb.org/download/${id}.pdb`,
          { defaultRepresentation: false }
        );

        if (structure) {
          structure.addRepresentation("cartoon", {
            colorScheme: "chainname",
            smoothSheet: true,
          });

          structure.addRepresentation("ball+stick", {
            selection: "ligand",
            colorScheme: "element",
            multipleBond: true,
            radiusScale: 0.8,
          });

          structure.addRepresentation("surface", {
            selection: "membrane",
            opacity: 0.3,
            colorScheme: "hydrophobicity",
          });

          stage.autoView();
        }

        onLoadComplete?.(structure);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load structure";
        setError(errorMessage);
        onLoadError?.(errorMessage);
      } finally {
        setIsLoading(false);
      }
    },
    [onLoadComplete, onLoadError]
  );

  useEffect(() => {
    if (pdbId) {
      loadStructure(pdbId);
    }
  }, [pdbId, loadStructure]);

  const resetView = () => stageRef.current?.autoView();

  const zoomIn = () => {
    if (stageRef.current) {
      stageRef.current.viewer.camera.zoom /= 1.2;
      stageRef.current.viewer.requestRender();
    }
  };

  const zoomOut = () => {
    if (stageRef.current) {
      stageRef.current.viewer.camera.zoom *= 1.2;
      stageRef.current.viewer.requestRender();
    }
  };

  return (
    <div className="flex-1 rounded-lg p-4 relative">
      <div ref={containerRef} className="w-full h-full rounded-lg"></div>

      <div className="absolute top-6 right-6 flex gap-3">
        <button onClick={resetView}>
          <RotateCcw className="h-5 w-5 cursor-pointer text-white" />
        </button>
        <button onClick={zoomIn}>
          <ZoomIn className="h-5 w-5 cursor-pointer text-white" />
        </button>
        <button onClick={zoomOut}>
          <ZoomOut className="h-5 w-5 cursor-pointer text-white" />
        </button>
      </div>

      {isLoading && (
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center rounded-lg">
          <div className="flex items-center gap-3 text-white">
            <Loader2 className="h-6 w-6 animate-spin text-blue-400" />
            <span className="text-lg">Loading structure...</span>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center rounded-lg">
          <div className="text-center text-red-400">
            <p className="text-lg font-medium mb-2">Failed to load structure</p>
            <p className="text-sm opacity-80">{error}</p>
          </div>
        </div>
      )}
    </div>
  );
}
