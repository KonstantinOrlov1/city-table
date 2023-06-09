import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchSlice } from "../store/search";

export const useOutsideClick = (listRef, inpurRef, cities, setText) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cities.length) {
      return;
    }
    const handleClick = (e) => {
      if (!listRef.current) {
        return;
      }
      if (!listRef.current.contains(e.target)) {
        inpurRef.current.value = "";
        dispatch(searchSlice.actions.hintForUser(""));
        setText("");
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [cities]);
};
