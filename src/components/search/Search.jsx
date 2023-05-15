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
  // const controllerRef = useRef(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // const controller = new AbortController();

  useEffect(() => {
    if (debouncedSearchTerm) {
      // controllerRef.current = null;
      dispatch(loadCities(debouncedSearchTerm));
    } else {
      dispatch(searchSlice.actions.hintForUser(""));
    }
  }, [debouncedSearchTerm]);

  // const cancelSearch = () => {
  //   console.log("22");
  //   controllerRef.current = controller;
  //   controllerRef.current.abort();
  // };

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
