import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { loadCities } from "../../store/search/middleware/loadCities";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { searchSlice } from "../../store/search";
import { ListCities } from "../listCities/listCities";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const inpuRef = useRef(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const controllerRef = useRef(null);

  useEffect(() => {
    const controller = new AbortController();
    controllerRef.current = controller;

    if (debouncedSearchTerm) {
      dispatch(loadCities(debouncedSearchTerm, controllerRef.current?.signal));
    } else {
      dispatch(searchSlice.actions.hintForUser(""));
    }

    return cancelSearch;
  }, [debouncedSearchTerm]);

  const cancelSearch = () => {
    controllerRef.current.abort();
  };

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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          ref={inpuRef}
        />
        <ListCities inputRef={inpuRef} setText={setSearchTerm} />
      </form>
    </div>
  );
};
