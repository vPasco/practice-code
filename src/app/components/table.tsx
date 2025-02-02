// components/Table.tsx
"use client";

// Define types for the Table component props
interface Column {
  header: string;
  accessor: string;
}

interface TableProps {
  data: Record<string, any>[]; // Array of objects with key-value pairs
  columns: Column[];
}

export default function Table({ data, columns }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
        {/* Table Header */}
        <thead className="bg-blue-600 text-white">
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="px-6 py-3 text-left text-sm font-medium uppercase">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50 transition-colors">
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-6 py-4 text-sm text-gray-700">
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}