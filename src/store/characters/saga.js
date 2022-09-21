import { call, put, spawn } from "redux-saga/effects";

import { getApiData } from "../../api/fetchData";
import { setCharacters } from "./actions";

export function* fetchCharactersDataSaga({ payload: { page, gender, status, species } }) {
  yield spawn(loadCharacters, page, gender, status, species);
}

export function* loadCharacters(page, gender, status, species) {
  const characters = yield call(getApiData, 'character', page, gender, status, species);
  yield put(setCharacters(characters))
}
