import React from "react";
import { GiDna1 } from "react-icons/gi";

export default function MutationMapping() {
  return (
    <div className="w-[300px] p-3 bg-gray-500/20 space-y-4 rounded-lg">
      <div className="flex items-center gap-2">
        <GiDna1 size={24} />
        <h2 className="font-semibold text-xl">Mutation Mapping</h2>
      </div>
      <div className="bg-black/30 p-3 rounded-lg  ">
        <p className="mb-4">Add Mutation</p>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
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
        <div className="mt-4">
          <select>
            <option>Medium</option>
          </select>
          <button></button>
        </div>
      </div>
    </div>
  );
}
