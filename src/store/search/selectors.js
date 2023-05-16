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
      id: item?.oktmo, //касательно обработки случая, если id не существует в данных, которые пришли с сервера.
      // Яего не делал умышленно, т.к. цель в ТЗ была показть что я вижу этот случай,
      //и могу предложить варианты обработки.

      // - либо мы просто делаем дополнительный фильтр, который будет проверять наличие нужно свойства и возвращать массив уже толкьо
      //с идентификаторами. По сути это просто выброс неидентифицированных значений.
      // - либо создавать свой id (на фронтенде) и сним тогда уже делать новую коллекцию данных, где по новому id будут записаны даныне
      //и работать с этой коллекцией. Это конечно дополнительно будет забиваьт стейт, но будут обработаны все варианты.
    };
  });
};

export const selectCitiesIsLoading = (state) =>
  selectCitiesModule(state).status === LoadingStatuses.inProgress;

export const selectCitiesIsFaild = (state) =>
  selectCitiesModule(state).status === LoadingStatuses.failed;
