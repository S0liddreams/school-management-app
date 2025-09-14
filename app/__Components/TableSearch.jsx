import Image from "next/image";
import React from "react";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] bg-[#99d5f5]  ring-white px-2">
      <Image src="/search.png" alt="alt" width={14} height={14} />
      <input
        className="w-[200px] p-2 outline-none"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default TableSearch;
