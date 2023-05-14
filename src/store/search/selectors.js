import { LoadingStatuses } from "../../helpers/loadingStatuses";

export const selectCitysModule = (state) => state.search;

export const selectGetHint = (state) => state.search.hint;

export const selectGetTableRows = (state) => selectCitysModule(state).tableIds;

export const selectCitysNameId = (state) => {
  return selectCitysModule(state).entities.map((item) => {
    return {
      value: item?.value || "",
      id: item.oktmo || `${Date.now()}`,
    };
  });
};

export const selectcitysIsLoading = (state) =>
  selectCitysModule(state).status === LoadingStatuses.inProgress;

export const selectcitysIsFaild = (state) =>
  selectCitysModule(state).status === LoadingStatuses.failed;
