import { call, put, spawn } from "redux-saga/effects";

import { getLocationsData } from "../../api/locationsApi";
import { setLocations } from "./actions";

export function* fetchLocationsDataSaga({ payload: { page, nameFilter, typeFilter, dimensionFilter } }) {
  yield spawn(loadLocations, page, nameFilter, typeFilter, dimensionFilter);
}

export function* loadLocations(page, nameFilter, typeFilter, dimensionFilter) {
  const locations = yield call(getLocationsData, 'location', page, nameFilter, typeFilter, dimensionFilter);
  yield put(setLocations(locations));
}
