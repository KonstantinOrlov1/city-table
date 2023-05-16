import { useSelector } from "react-redux";
import { selectArrTableData } from "../../store/search/selectors";
import { useMemo } from "react";
import { DeleteRow } from "../deleteRow/deleteRow";
import { useFilters, useGlobalFilter, useSortBy, useTable } from "react-table";
import styles from "./styles.module.css";
import { ColumnFilter } from "../columnFilter/ColumnFilter";

export const Table = () => {
  const tableRows = useSelector(selectArrTableData);

  const data = useMemo(
    () =>
      tableRows.map((elem) => ({
        col1: elem?.oktmo,
        col2: elem?.name_display || "нет данных",
        col3: elem?.description || "нет данных",
        col4: elem?.population || "нет данных",
      })),

    [tableRows]
  );

  const columns = useMemo(
    () => [
      {
        Header: "Идентификатор",
        accessor: "col1",
        Filter: ColumnFilter,
      },
      {
        Header: "Наименование города",
        accessor: "col2",
        Filter: ColumnFilter,
      },
      {
        Header: "Название региона",
        accessor: "col3",
        Filter: ColumnFilter,
      },
      {
        Header: "Численность наcеления",
        accessor: "col4",
        Filter: ColumnFilter,
      },
      {
        disableFilters: true,
        Header: "Удалить город",
        id: "delete",

        Cell: (row) => <DeleteRow row={row} />,
      },
    ],
    []
  );

  const citiesTable = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useFilters,
    useSortBy
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    citiesTable;

  return (
    <table {...getTableProps()} className={styles.root}>
      <thead className={styles.thed}>
        {headerGroups.map((item) => (
          <tr {...item.getHeaderGroupProps()}>
            {item.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className={styles.th}
              >
                <div className={styles.container}>
                  <div>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </div>

                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className={styles.tbody}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} className={styles.td}>
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
