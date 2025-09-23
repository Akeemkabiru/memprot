import React from "react";
import { BsZoomIn, BsZoomOut } from "react-icons/bs";
import { FiRotateCcw } from "react-icons/fi";

export default function ProteinStructure() {
  return (
    <div className="flex-1 bg-black rounded-lg p-4">
      <div className="flex items-center gap-2 justify-end">
        <div className="bg-gray-500/20 p-2 rounded-md cursor-pointer">
          <FiRotateCcw size={16} />
        </div>
        <div className="bg-gray-500/20 p-2 rounded-md cursor-pointer ">
          <BsZoomIn size={16} />
        </div>
        <div className="bg-gray-500/20 p-2 rounded-md cursor-pointer">
          <BsZoomOut size={16} />
        </div>
      </div>
    </div>
  );
}
