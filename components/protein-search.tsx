import React from "react";
import { HiDatabase, HiSearch } from "react-icons/hi";

export default function ProteinSearch() {
  return (
    <div className="w-[300px] p-2 bg-gray-500/20 space-y-4">
      <div className="flex items-center gap-2">
        <HiDatabase size={24} />
        <h2 className="font-semibold text-xl"> Structure Search</h2>
      </div>

      <form>
        <p className="font-medium text-sm">PDB ID</p>
        <div className="flex items-center gap-2">
          <input type="text" className="border focus:outline-none rounded-md" />
          <HiSearch />
        </div>
      </form>

      <div>
        <p className="font-medium">Recents</p>
        <div className="text-sm">10KC</div>
      </div>

      <div>
        <p className="mb-2">Example Membrane Proteins</p>
        <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg text-sm">
          <div>
            <p>1OKC</p>
            <p>Rhodopsin</p>
          </div>
          <div>GPCR</div>
        </div>
      </div>
    </div>
  );
}
