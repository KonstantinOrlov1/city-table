import styles from "./styles.module.css";

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;

  return (
    <div>
      <input
        className={styles.input}
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};
