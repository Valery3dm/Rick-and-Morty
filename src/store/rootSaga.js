import { takeEvery, put, call, fork, spawn } from 'redux-saga/effects';

import { LOAD_EPISODES_DATA } from './episodes/actionTypes';
import { LOAD_CHARACTERS_DATA } from './characters/actionTypes';
import { getApiData } from '../api/fetchData';
import { fetchCharactersDataSaga } from './characters/saga';
import { fetchEpisodesDataSaga } from './episodes/saga';

export function* loadLocations() {
  const locations = yield call(getApiData, 'location', 1);
  yield put({ type: 'SET_LOCATIONS', payload: locations.results })
}

export function* workerSaga({ payload: { page } }) {
  yield spawn(loadLocations);
}



export function* watchLoadDataSaga() {
  yield takeEvery(LOAD_CHARACTERS_DATA, fetchCharactersDataSaga);
  yield takeEvery(LOAD_EPISODES_DATA, fetchEpisodesDataSaga);
}

export default function* rootSaga() {
  yield fork(watchLoadDataSaga);
}
