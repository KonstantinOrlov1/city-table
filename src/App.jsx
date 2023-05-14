import { Provider } from "react-redux";
import { Search } from "./components/search/Search";
import { store } from "./store";
import { Table } from "./components/table/Table";

export const App = () => {
  return (
    <Provider store={store}>
      <Search />
      <Table />
    </Provider>
  );
};
