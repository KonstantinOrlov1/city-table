import { Provider } from "react-redux";
import { Search } from "./components/search/Search";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <Search />
    </Provider>
  );
};
