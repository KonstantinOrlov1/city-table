import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { loadCitys } from "../../store/search/middleware/loadCitys";
import { ListCitys } from "../listCitys/listCitys";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { searchSlice } from "../../store/search";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const inpuRef = useRef(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(loadCitys(debouncedSearchTerm));
    } else {
      dispatch(searchSlice.actions.hintForUser(""));
    }
  }, [debouncedSearchTerm]);

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        Приложение поиска и добавления городов в таблицу
      </h1>
      <form>
        <input
          type="text"
          placeholder="Введите город"
          className={styles.input}
          onChange={(e) => setSearchTerm(e.target.value)}
          ref={inpuRef}
        />
        <ListCitys inputRef={inpuRef} setText={setSearchTerm} />
      </form>
    </div>
  );
};
