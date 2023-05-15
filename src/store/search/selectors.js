import { LoadingStatuses } from "../../helpers/loadingStatuses";

export const selectCitiesModule = (state) => state.search;

export const selectGetHint = (state) => state.search.hint;

export const selectGetTableRows = (state) => selectCitiesModule(state).tableIds;

export const selectArrTableData = (state) =>
  Object.values(selectGetTableRows(state)) || [];

export const selectCitiesNameId = (state) => {
  return selectCitiesModule(state).entities.map((item) => {
    return {
      value: item?.value || "",
      id: item?.oktmo || `${Date.now()}`,
    };
  });
};

export const selectCitiesIsLoading = (state) =>
  selectCitiesModule(state).status === LoadingStatuses.inProgress;

export const selectCitiesIsFaild = (state) =>
  selectCitiesModule(state).status === LoadingStatuses.failed;
