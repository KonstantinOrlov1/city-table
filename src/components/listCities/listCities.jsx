import { useSelector } from "react-redux";
import {
  selectCitiesIsFaild,
  selectCitiesIsLoading,
  selectCitiesNameId,
  selectGetHint,
} from "../../store/search/selectors";
import styles from "./styles.module.css";
import React, { useRef } from "react";
import classNames from "classnames";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { City } from "../city/City";

export const ListCities = React.memo(({ inputRef, setText }) => {
  const cities = useSelector(selectCitiesNameId);
  const isLoading = useSelector(selectCitiesIsLoading);
  const err = useSelector(selectCitiesIsFaild);
  const hint = useSelector(selectGetHint);

  const listRef = useRef(null);
  useOutsideClick(listRef, inputRef, cities, setText);

  if (err) {
    return (
      <div className={classNames(styles.message, styles.error)}>
        Ошибка загрузки сервера, попробуйте обновить страницу!
      </div>
    );
  }

  if (hint) {
    return (
      <div className={classNames(styles.message, styles.hint)}>{hint}</div>
    );
  }

  if (!cities.length) {
    return null;
  }

  return (
    <ul className={styles.list} ref={listRef}>
      {!isLoading ? (
        cities.map((city) => {
          return (
            <City
              key={city.id}
              cityValue={city.value}
              id={city.id}
              setText={setText}
            />
          );
        })
      ) : (
        <span>Loading...</span>
      )}
    </ul>
  );
});
