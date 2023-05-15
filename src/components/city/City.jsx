import { useDispatch } from "react-redux";
import { searchSlice } from "../../store/search";

export const City = ({ cityValue, id, setText }) => {
  const dispatch = useDispatch();

  const handlerCityClick = () => {
    dispatch(searchSlice.actions.addCity(id));
    dispatch(searchSlice.actions.hintForUser(""));
    setText("");
  };

  return <li onClick={handlerCityClick}>{cityValue}</li>;
};
