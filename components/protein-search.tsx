import { exmapleProtein } from "@/constant";
import { useProtStore } from "@/store/protstore";
import React from "react";
import { HiDatabase } from "react-icons/hi";

export default function ProteinSearch() {
  const { pbID, setPbID } = useProtStore();

  return (
    <div className="lg:w-[300px] p-3 bg-gray-500/20 space-y-4 rounded-lg border-gray-400/50 border">
      <div className="flex items-center gap-2">
        <HiDatabase size={24} />
        <h2 className="font-semibold text-xl"> Structure Search</h2>
      </div>

      <form className="">
        <p className="font-medium mb-2">PDB ID</p>

        <input
          value={pbID}
          onChange={(e) => setPbID(e.target.value.toLocaleUpperCase())}
          type="text"
          placeholder="e.g., 10KC, 3R"
          className="border w-full border-gray-400 h-9 px-2 focus:outline-none rounded-md placeholder:text-gray-400"
        />
      </form>

      <div>
        <p className="font-medium">Recents</p>
        <div>10KC</div>
      </div>

      <div className="space-y-3 ">
        <p className="mb-2">Example Membrane Proteins</p>
        {exmapleProtein.map((el) => {
          return (
            <div
              key={el.pdbId}
              onClick={() => setPbID(el.pdbId.toUpperCase())}
              className="flex items-center justify-between bg-black/30 p-3 rounded-lg cursor-pointer border-gray-400/50 border hover:scale-105 transition-all duration-300"
            >
              <div className="space-y-1">
                <p>{el.pdbId}</p>
                <p className="text-gray-400">{el.title}</p>
              </div>
              <div className="border-gray-400/50 border px-2 rounded-xl flex items-center justify-center text-[#3db2ff] font-semibold">
                {el.classification}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
