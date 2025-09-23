import Image from "next/image";
import React from "react";

export default function MutationMapping() {
  return (
    <div className="w-[300px] p-2 bg-gray-500/20 space-y-4">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={24} height={24} />
        <h2 className="font-semibold text-xl">Mutation Mapping</h2>
      </div>
      <div className="bg-black/30 p-3 rounded-lg text-sm">
        <p>Add Mutation</p>
        <div className="grid grid-cols-2 grid-rows-2">
          <select>
            <option>Chain</option>
          </select>

          <input type="number" placeholder="Posit" />

          <select>
            <option>From</option>
          </select>

          <select>
            <option>To</option>
          </select>
        </div>
        <div className="fle">
          <select>
            <option>Medium</option>
          </select>
          <button></button>
        </div>
      </div>
    </div>
  );
}
