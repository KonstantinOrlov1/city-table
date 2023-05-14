import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "./search";

const rootReducer = combineReducers({
  search: searchSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});
