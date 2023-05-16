import { createSlice } from "@reduxjs/toolkit";
import { LoadingStatuses } from "../../helpers/loadingStatuses";
import { actions } from "react-table";

const initialState = {
  entities: [],
  status: LoadingStatuses.idle,
  hint: "",
  tableIds: {},
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = LoadingStatuses.inProgress;
      state.hint = "";
    },
    successLoading: (state, action) => {
      state.entities = action.payload;
      state.status = LoadingStatuses.success;
      state.hint = "";
    },
    failLoading: (state) => {
      state.status = LoadingStatuses.failed;
      state.hint = "";
    },
    hintForUser: (state, action) => {
      state.entities = [];
      state.hint = action.payload;
    },
    addCity: (state, action) => {
      state.tableIds = {
        ...state.tableIds,
        [action.payload]: state.entities.find((elem) => {
          return elem?.oktmo === action.payload;
        }),
      };
    },
    deleteCity: (state, action) => {
      delete state.tableIds[action.payload];
    },
  },
});
