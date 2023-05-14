import { useDispatch } from "react-redux";
import { searchSlice } from "../../store/search";

export const City = ({ cityValue, id }) => {
  const dispatch = useDispatch();

  const handlerCityClick = () => {
    dispatch(searchSlice.actions.addCity(id));
  };

  return <li onClick={handlerCityClick}>{cityValue}</li>;
};
