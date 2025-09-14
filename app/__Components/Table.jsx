import React from "react";

const Table = ({ columns, data, renderRow }) => {
  return (
    <table className="w-full mt-4">
      {/* HEADERS */}
      <thead>
        <tr className="text-left text-sm text-gray-500">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className || ""}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>

      {/* ROWS */}
      <tbody>
        {data.map((item) => renderRow(item))}
      </tbody>
    </table>
  );
};

export default Table;
