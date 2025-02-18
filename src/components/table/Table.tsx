interface TableProps {
  columns: any;
  rows?: any;
  second_class?: string;
  tableRef?: any;
}

const Table = ({ columns, rows, second_class, tableRef }: TableProps) => {
  return (
    <table
      className={`w-full  border-collapse text-left ${second_class}`}
      ref={tableRef}
    >
      <thead>
        <tr className="bg-blue-200 text-gray-700">
          {columns.map((column: any, index: number) => (
            <th
              key={column?.label}
              className={`px-4 py-3 text-sm  font-medium ${
                index === 0 ? "rounded-tl-lg" : ""
              } ${index === columns.length - 1 ? "rounded-tr-lg" : ""}`}
            >
              {column?.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows?.map((row: any, rowIndex: number) => (
          <tr
            key={rowIndex + "xyz"}
            className={`${
              rowIndex % 2 === 0
                ? "bg-white hover:bg-gray-300"
                : "bg-gray-100 hover:bg-gray-300"
            }`}
          >
            {columns?.map((column: any) => (
              <td
                key={column?.label}
                className="px-4 py-2 text-sm text-gray-600  "
              >
                {row[column?.label]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
