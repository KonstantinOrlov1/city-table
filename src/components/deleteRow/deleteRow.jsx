import { useDispatch } from "react-redux";
import { searchSlice } from "../../store/search";
import styles from "./styles.module.css";

export const DeleteRow = ({ row }) => {
  const dispatch = useDispatch();
  const rowId = row.row.values.col1;

  const handleDeleteCity = () => {
    dispatch(searchSlice.actions.deleteCity(rowId));
  };

  return (
    <button onClick={handleDeleteCity} className={styles.btn}>
      Удалить город
    </button>
  );
};
