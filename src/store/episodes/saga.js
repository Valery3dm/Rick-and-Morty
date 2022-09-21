import { call, put, spawn } from "redux-saga/effects";

import { getApiData } from "../../api/fetchData";
import { setEpisodes } from "./actions";

export function* fetchEpisodesDataSaga({ payload: { page, nameFilter } }) {
    yield spawn(loadEpisodes, page, nameFilter);
}

export function* loadEpisodes(page, nameFilter) {
    const episodes = yield call(getApiData, 'episode', page, '', '', '', nameFilter);
    yield put(setEpisodes(episodes));
}
