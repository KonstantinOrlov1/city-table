import { useSelector } from "react-redux";
import { selectGetTableRows } from "../../store/search/selectors";

export const Table = () => {
  const tableRows = useSelector(selectGetTableRows);

  console.log(tableRows);
};
