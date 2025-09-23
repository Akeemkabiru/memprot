import Image from "next/image";
import React from "react";
import { HiUser, HiUsers } from "react-icons/hi";

export default function StructureInfo() {
  return (
    <div className="w-[300px] p-2 bg-gray-500/20 space-y-4">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={24} height={24} />
        <h2 className="font-semibold text-xl">Structure Information</h2>
      </div>
      <div>
        <div className="flex justify-between items-center ">
          <p>10KC</p>
          <p className="text-sm">Membrane Protein/GPCR</p>
        </div>
        <p>Grounded state Rhodopsin</p>
      </div>

      <div>
        <div>
          <HiUsers />
          <p>Organism</p>
        </div>
        <p>Homo Sapiens</p>
      </div>
      <hr />
      <div className="grid text-sm grid-cols-2 grid-rows-2 gap-6 justify-between ">
        <div>
          <p>Resolution</p>
          <p>2.80 Å</p>
        </div>
        <div>
          <p>Deposited</p>
          <p>2003-05-07</p>
        </div>
        <div>
          <p>Chains</p>
          <p>1</p>
        </div>
        <div>
          <p>Ligands</p>
          <p>1</p>
        </div>
      </div>
      <hr />
      <div>
        <p>Authors</p>
        <p>Kabby</p>
      </div>
    </div>
  );
}
