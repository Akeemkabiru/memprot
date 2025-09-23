import BindingSites from "@/components/ligand-bindingsite";
import MutationMapping from "@/components/mutation-mapping";
import ProteinSearch from "@/components/protein-search";
import ProteinStructure from "@/components/protein-structure";
import StructureInfo from "@/components/structure-info";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export default function Home() {
  return (
    <div className="w-full max-h-screen overflow-hidden">
      <div className="w-full flex justify-between px-6 py-5 border-b border-b-gray-600/90">
        <div className="flex items-center gap-x-2">
          <Image src="/logo.png" alt="logo" width={48} height={48} />
          <div className="">
            <h2 className="font-semibold text-2xl">MemProt Explorer</h2>
            <p className="text-sm">
              Interactive Membrane Protein Structure Visualization
            </p>
          </div>
        </div>

        <Link href="" className="flex items-center gap-4">
          <BsGithub />
          <p>Github</p>
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-7xl flex justify-between gap-8">
          <div className="space-y-6">
            <ProteinSearch />
            <StructureInfo />
          </div>
          <ProteinStructure />
          <div className="space-y-6">
            <BindingSites />
            <MutationMapping />
          </div>
        </div>
      </div>
    </div>
  );
}
