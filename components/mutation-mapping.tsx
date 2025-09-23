import React from "react";
import { BsPlus } from "react-icons/bs";
import { GiDna1 } from "react-icons/gi";
import { HiPlus } from "react-icons/hi";

export default function MutationMapping() {
  return (
    <div className="w-[300px] p-3 bg-gray-500/20 space-y-4 rounded-lg border-gray-400/50 border">
      <div className="flex items-center gap-2">
        <GiDna1 size={24} />
        <h2 className="font-semibold text-xl">Mutation Mapping</h2>
      </div>
      <div className="bg-black/30 p-3 rounded-lg  ">
        <p className="mb-4">Add Mutation</p>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <select className="border w-full border-gray-400 h-9 px-2 focus:outline-none rounded-md placeholder:text-gray-400">
            <option>Chain</option>
            <option>A</option>
            <option>B</option>
          </select>

          <input
            type="number"
            placeholder="Posit"
            className="border w-full border-gray-400 h-9 px-2 focus:outline-none rounded-md placeholder:text-gray-400"
          />

          <select className="border w-full border-gray-400 h-9 px-2 focus:outline-none rounded-md placeholder:text-gray-400">
            <option>From</option>
          </select>

          <select className="border w-full border-gray-400 h-9 px-2 focus:outline-none rounded-md placeholder:text-gray-400">
            <option className="accent-red-500">To</option>
          </select>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <select className="border w-full border-gray-400 h-9 px-2 focus:outline-none rounded-md placeholder:text-gray-400">
            <option>Low impact</option>
            <option selected={true}>Medium impact</option>
            <option>High impact</option>
          </select>

          <button className="bg-[#ff7043] rounded-md p-2.5">
            <BsPlus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
