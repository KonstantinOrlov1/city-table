import { searchSlice } from "..";
import { MINLENGTHAPI } from "../../../helpers/loadingStatuses";

export const loadCitys = (searchQuery) => (dispatch, getState) => {
  if (searchQuery.length < MINLENGTHAPI) {
    dispatch(searchSlice.actions.hintForUser("Введите более 2х символов"));
    return;
  }

  dispatch(searchSlice.actions.startLoading());

  fetch(`https://api.geotree.ru/search.php?term=${searchQuery}`)
    .then((response) => response.json())
    .then((citys) => {
      if (citys.length !== 0) {
        dispatch(searchSlice.actions.successLoading(citys));
      } else {
        dispatch(searchSlice.actions.hintForUser("нет данных"));
      }
    })
    .catch((err) => {
      console.log(err.message);
      dispatch(searchSlice.actions.failLoading());
    });
};
