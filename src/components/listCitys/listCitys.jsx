import { useSelector } from "react-redux";
import {
  selectCitysNameId,
  selectGetHint,
  selectcitysIsFaild,
  selectcitysIsLoading,
} from "../../store/search/selectors";
import styles from "./styles.module.css";
import React, { useRef } from "react";
import classNames from "classnames";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { City } from "../city/City";

export const ListCitys = React.memo(({ inputRef, setText }) => {
  const citys = useSelector(selectCitysNameId);
  const isLoading = useSelector(selectcitysIsLoading);
  const err = useSelector(selectcitysIsFaild);
  const hint = useSelector(selectGetHint);

  const listRef = useRef(null);
  useOutsideClick(listRef, inputRef, citys, setText);

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

  if (!citys.length) {
    return null;
  }

  return (
    <ul className={styles.list} ref={listRef}>
      {!isLoading ? (
        citys.map((city) => {
          return <City key={city.id} cityValue={city.value} id={city.id} />;
        })
      ) : (
        <span>Loading...</span>
      )}
    </ul>
  );
});
