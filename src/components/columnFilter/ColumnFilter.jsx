export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;

  return (
    <div>
      <input
        className="filter_input"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};
