import { takeEvery, fork } from 'redux-saga/effects';

import { LOAD_EPISODES_DATA } from './episodes/actionTypes';
import { LOAD_CHARACTERS_DATA } from './characters/actionTypes';
import { fetchCharactersDataSaga } from './characters/saga';
import { fetchEpisodesDataSaga } from './episodes/saga';
import { fetchLocationsDataSaga } from './locations/saga';
import { LOAD_LOCATIONS_DATA } from './locations/actionTypes';

export function* watchLoadDataSaga() {
  yield takeEvery(LOAD_CHARACTERS_DATA, fetchCharactersDataSaga);
  yield takeEvery(LOAD_EPISODES_DATA, fetchEpisodesDataSaga);
  yield takeEvery(LOAD_LOCATIONS_DATA, fetchLocationsDataSaga);
}

export default function* rootSaga() {
  yield fork(watchLoadDataSaga);
}
