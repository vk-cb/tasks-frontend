
interface TableProps {
    columns: any
    rows: any
    second_class: string
    tableRef: any
}

const Table = ({ columns, rows, second_class, tableRef }: TableProps) => {
    return (
      <table className={`w-full border-collapse ${second_class}`} ref={tableRef}>
        <thead>
          <tr>
            {columns.map((column:any) => (
              <th
                key={column?.label}
                className="bg-blue-600 text-white text-base font-normal px-4 py-3 border border-black"
              >
                {column?.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row:any) => (
            <tr key={row?.userName}>
              {columns?.map((column:any) => (
                <td
                  key={column?.label}
                  className="text-sm font-light px-2 py-2 text-center border border-black"
                >
                  {(row[column?.label])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  
  export default Table;