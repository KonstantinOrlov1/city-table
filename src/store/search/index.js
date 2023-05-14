import { createSlice } from "@reduxjs/toolkit";
import { LoadingStatuses } from "../../helpers/loadingStatuses";

const initialState = {
  entities: [],
  status: LoadingStatuses.idle,
  hint: "",
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
  },
});
