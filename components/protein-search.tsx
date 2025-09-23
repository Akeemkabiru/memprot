import React from "react";
import { HiDatabase, HiSearch } from "react-icons/hi";

export default function ProteinSearch() {
  return (
    <div className="w-[300px] p-3 bg-gray-500/20 space-y-4 rounded-lg">
      <div className="flex items-center gap-2">
        <HiDatabase size={24} />
        <h2 className="font-semibold text-xl"> Structure Search</h2>
      </div>

      <form className="">
        <p className="font-medium mb-2">PDB ID</p>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="e.g., 10KC, 3R"
            className="border w-full border-gray-400 h-9 px-2 focus:outline-none rounded-md placeholder:text-gray-400"
          />
          <div className="bg-[#ff7043] rounded-md p-1.5">
            <HiSearch size={22} />
          </div>
        </div>
      </form>

      <div>
        <p className="font-medium">Recents</p>
        <div>10KC</div>
      </div>

      <div>
        <p className="mb-2">Example Membrane Proteins</p>
        <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg ">
          <div>
            <p>1OKC</p>
            <p className="text-gray-400">Rhodopsin</p>
          </div>
          <div>GPCR</div>
        </div>
      </div>
    </div>
  );
}
