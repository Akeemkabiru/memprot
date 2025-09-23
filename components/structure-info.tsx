import React from "react";
import { BsBook, BsPeople } from "react-icons/bs";
import { GiAtomicSlashes } from "react-icons/gi";

export default function StructureInfo() {
  return (
    <div className="w-[300px]  bg-gray-500/20 space-y-4 rounded-lg p-3 border-gray-400/50 border">
      <div className="flex items-center gap-2">
        <GiAtomicSlashes size={24} />

        <h2 className="font-semibold text-xl">Structure Information</h2>
      </div>
      <div className="text-gray-400">
        <div className="flex justify-between items-center ">
          <p className="text-[#3db2ff] font-semibold">10KC</p>
          <p className="border-gray-400/50 border px-2  rounded-xl flex items-center justify-center">
            Membrane Protein/GPCR
          </p>
        </div>
        <p className="text-[#ededed] mt-4 font-medium">
          Grounded state Rhodopsin
        </p>
      </div>

      <div className="text-gray-400 space-y-1">
        <div className="flex items-center gap-2">
          <BsPeople />
          <p>Organism</p>
        </div>
        <p className="italic text-[#ededed]">Homo Sapiens</p>
      </div>
      <hr className="opacity-10" />
      <div className="grid  grid-cols-2 grid-rows-2 gap-4 justify-between text-gray-400">
        <div className="space-y-1">
          <p>Resolution</p>
          <p className="text-[#ededed]">2.80 Å</p>
        </div>
        <div>
          <p>Deposited</p>
          <p className="text-[#ededed]">2003-05-07</p>
        </div>
        <div className="space-y-1">
          <p>Chains</p>
          <p className="text-[#ededed]">1</p>
        </div>
        <div className="space-y-1">
          <p>Ligands</p>
          <p className="text-[#ededed]">1</p>
        </div>
      </div>
      <hr className="opacity-10" />
      <div className="text-gray-400 space-y-1">
        <div className="flex items-center gap-2">
          <BsBook />
          <p>Authors</p>
        </div>
        <p className="text-[#ededed]">Kabby</p>
      </div>
    </div>
  );
}
