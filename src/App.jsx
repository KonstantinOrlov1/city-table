import { Provider } from "react-redux";
import { Search } from "./components/search/Search";
import { store } from "./store";
import { Table } from "./components/table/Table";
import stylesApp from "./stylesApp.module.css";

export const App = () => {
  return (
    <Provider store={store}>
      <Search />
      <div className={stylesApp.root}>
        <Table />
      </div>
    </Provider>
  );
};
