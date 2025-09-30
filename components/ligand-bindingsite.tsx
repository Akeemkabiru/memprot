"use client";

import { useProtStore } from "@/store/protstore";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { GiMolecule } from "react-icons/gi";

export default function BindingSites() {
  const [isLoading, setIsLoading] = useState(false);
  const [bindingSite, setBindingSite] = useState("");
  const { pbID, setPbID } = useProtStore();

  const loadInformation = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://data.rcsb.org/rest/v1/core/entry/${pbID}`
      );
      setBindingSite(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [pbID]);

  useEffect(() => {
    if (pbID && pbID.length >= 4) loadInformation();
  }, [pbID, loadInformation]);

  console.log(bindingSite);

  return (
    <div className="w-[300px] p-3 bg-gray-500/20 space-y-4 h-fit rounded-lg border-gray-400/50 border">
      <div className="flex items-center gap-2">
        <GiMolecule size={24} />
        <h2 className="font-semibold text-xl">Ligands & Binding Sites</h2>
      </div>
      <div className="space-y-3 bg-black/30 p-3 rounded-lg text-gray-400 border-gray-400/50 border ">
        <div className="flex items-center justify-between">
          <p className="text-[#ededed]">RET</p>
          <p className="border-gray-400/50 border px-2 rounded-xl flex items-center justify-center text-[#3db2ff] font-semibold">
            Ligand
          </p>
        </div>
        <p className="text-[#ededed]">11-cis-retinal</p>

        <div className="space-y-0.5">
          <p>Formula: C20H28O</p>
          <p>MW: 284.44</p>
          <p>Da Site: Lys296</p>
        </div>
      </div>
      <button className="w-full border border-gray-400/50 rounded-md py-2 cursor-pointer font-medium">
        View All Sites
      </button>
    </div>
  );
}
