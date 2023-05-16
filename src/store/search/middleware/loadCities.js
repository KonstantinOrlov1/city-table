import { searchSlice } from "..";
import { MINLENGTHAPI } from "../../../helpers/loadingStatuses";

export const loadCities = (searchQuery, signal) => (dispatch) => {
  if (searchQuery.length === 0) {
    return;
  }

  if (searchQuery.length < MINLENGTHAPI) {
    dispatch(searchSlice.actions.hintForUser("Введите более 2х символов"));
    return;
  }

  dispatch(searchSlice.actions.startLoading());

  fetch(`https://api.geotree.ru/search.php?term=${searchQuery}`, {
    signal: signal,
  })
    .then((response) => {
      return response.json();
    })
    .then((cities) => {
      if (cities.length !== 0) {
        dispatch(searchSlice.actions.successLoading(cities));
      } else {
        dispatch(searchSlice.actions.hintForUser("нет данных"));
      }
    })
    .catch((err) => {
      if (err.name === "AbortError") {
        console.log("Прервано!");
      } else {
        console.log(err.message);
        dispatch(searchSlice.actions.failLoading());
      }
    });
};
