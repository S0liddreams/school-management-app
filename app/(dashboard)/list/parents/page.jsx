import React from "react";
import TableSearch from "../../../__Components/TableSearch";
import Image from "next/image";
import Pagination from "../../../__Components/Pagination";
import Table from "../../../__Components/Table";
import { role, parentsData } from "../../../../lib/data";
import Link from "next/link";

const columns = [
  { header: "Info", accessor: "info" },
  {
    header: "Student Names ",
    accessor: "students",
    className: "hidden md:table-cell",
  },
 
  { header: "Phone", accessor: "phone", className: "hidden lg:table-cell" },
  { header: "Address", accessor: "address", className: "hidden lg:table-cell" },
  { header: "Actions", accessor: "action" },
];

const ParentListpage = () => {
  const renderRow = (parent) => (
    <tr
      key={parent.id}
      className="border-b border-gray-200 even:bg-slate-100 text-sm hover:bg-[#E5B80B]"
    >
      {/* Info */}
      <td className="flex items-center gap-4 p-4">
        
        <div className="flex flex-col">
          <h3 className="font-semibold">{parent.name}</h3>
          <p className="text-sm text-gray-500">{parent?.email}</p>
        </div>
      </td>

      {/* Teacher ID */}
      <td className="hidden md:table-cell">{parent.students.join(",")}</td>

      {/* Phone */}
      <td className="hidden lg:table-cell">{parent.phone}</td>

      {/* Address */}
      <td className="hidden lg:table-cell">{parent.address}</td>

      {/* Actions */}
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${parent.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-[#99d5f5]">
              <Image src="/view.png" alt="view" width={16} height={16} />
            </button>
          </Link>

          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-[#d62828]">
              <Image src="/trash.png" alt="delete" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-amber-50 p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E5B80B]">
              <Image src="/filter.png" alt="filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E5B80B]">
              <Image src="/sort.png" alt="sort" width={14} height={14} />
            </button>
            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E5B80B]">
                <Image src="/plus.png" alt="add" width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns} data={parentsData} renderRow={renderRow} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ParentListpage;
