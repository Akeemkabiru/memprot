"use client";

import { useProtStore } from "@/store/protstore";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { BsBook, BsPeople } from "react-icons/bs";
import { GiAtomicSlashes } from "react-icons/gi";

interface ProtInformation {
  rcsb_id: string;
  struct_keywords?: {
    pdbx_keywords?: string;
  };
  struct?: {
    title?: string;
  };
  rcsb_accession_info?: {
    deposit_date?: string;
  };
  rcsb_entry_info?: {
    resolution_combined?: number[];
    deposited_polymer_entity_instance_count?: number;
    deposited_nonpolymer_entity_instance_count?: number;
  };
  rcsb_entry_container_identifiers?: {
    source_organism_names?: string[];
  };
  audit_author?: { name: string }[];
}

export default function StructureInfo() {
  const { pbID } = useProtStore();
  const [isLoading, setIsLoading] = useState(false);
  const [protInformation, setProtInformation] =
    useState<ProtInformation | null>(null);

  const loadInformation = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get<ProtInformation>(
        `https://data.rcsb.org/rest/v1/core/entry/${pbID}`
      );
      setProtInformation(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [pbID]);

  useEffect(() => {
    if (pbID && pbID.length >= 4) loadInformation();
  }, [pbID, loadInformation]);

  const depositedDate = protInformation?.rcsb_accession_info?.deposit_date
    ? new Date(protInformation.rcsb_accession_info.deposit_date)
        .toISOString()
        .split("T")[0]
    : null;

  const organism =
    protInformation?.rcsb_entry_container_identifiers
      ?.source_organism_names?.[0] || "N/A";

  const authorsRaw = protInformation?.audit_author?.map((a) => a.name) || [];

  let authors = "N/A";
  if (authorsRaw.length === 1) {
    authors = authorsRaw[0];
  } else if (authorsRaw.length === 2) {
    authors = `${authorsRaw[0]} & ${authorsRaw[1]}`;
  } else if (authorsRaw.length > 2) {
    authors = `${authorsRaw[0]} et al.`;
  }

  if (!protInformation) return null;

  return (
    <div className="lg:w-[300px] bg-gray-500/20 space-y-4 rounded-lg p-3 border-gray-400/50 border">
      <div className="flex items-center gap-2">
        <GiAtomicSlashes size={24} />
        <h2 className="font-semibold text-xl">Structure Information</h2>
      </div>

      <div className="text-gray-400">
        <div className="flex justify-between items-center ">
          <p className="text-[#3db2ff] font-semibold">
            {protInformation.rcsb_id}
          </p>
          <p className="border-gray-400/50 border px-2 rounded-xl flex items-center justify-center">
            {protInformation.struct_keywords?.pdbx_keywords}
          </p>
        </div>
        <p className="text-[#ededed] mt-4 font-medium">
          {protInformation.struct?.title}
        </p>
      </div>

      <div className="text-gray-400 space-y-1">
        <div className="flex items-center gap-2">
          <BsPeople />
          <p>Organism</p>
        </div>
        <p className="italic text-[#ededed]">{organism}</p>
      </div>

      <hr className="opacity-10" />

      <div className="grid grid-cols-2 grid-rows-2 gap-4 justify-between text-gray-400">
        <div className="space-y-1">
          <p>Resolution</p>
          <p className="text-[#ededed]">
            {protInformation.rcsb_entry_info?.resolution_combined?.[0] || "N/A"}{" "}
            Å
          </p>
        </div>
        <div>
          <p>Deposited</p>
          <p className="text-[#ededed]">{depositedDate || "N/A"}</p>
        </div>
        <div className="space-y-1">
          <p>Chains</p>
          <p className="text-[#ededed]">
            {protInformation.rcsb_entry_info
              ?.deposited_polymer_entity_instance_count ?? "N/A"}
          </p>
        </div>
        <div className="space-y-1">
          <p>Ligands</p>
          <p className="text-[#ededed]">
            {protInformation.rcsb_entry_info
              ?.deposited_nonpolymer_entity_instance_count ?? "N/A"}
          </p>
        </div>
      </div>

      <hr className="opacity-10" />

      <div className="text-gray-400 space-y-1">
        <div className="flex items-center gap-2">
          <BsBook />
          <p>Authors</p>
        </div>
        <p className="text-[#ededed]">{authors}</p>
      </div>
    </div>
  );
}
