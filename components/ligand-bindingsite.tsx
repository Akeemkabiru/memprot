import Image from "next/image";
import React from "react";

export default function BindingSites() {
  return (
    <div className="w-[300px] p-2 bg-gray-500/20 space-y-4 h-fit">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={24} height={24} />
        <h2 className="font-semibold text-xl">Ligands & Binding Sites</h2>
      </div>
      <div className="space-y-3 bg-black/30 p-3 rounded-lg">
        <div className="flex items-center justify-between text-sm">
          <p>RET</p>
          <p>Ligand</p>
        </div>
        <p>11-cis-retinal</p>

        <p>Formula: C20H28O</p>
        <p>MW: 284.44</p>
        <p>Da Site: Lys296</p>
      </div>
      <p>View All Sites</p>
    </div>
  );
}
