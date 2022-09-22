import * as types from "./actionTypes";

export const fetchEpisodesData = (page, nameFilter) => ({
  type: types.LOAD_EPISODES_DATA,
  payload: { page, nameFilter }
});

export const setEpisodes = episodes => ({
  type: types.SET_EPISODES,
  payload: { episodes }
});

export const setPageEpisodes = num => ({
  type: types.SET_PAGE_EPISODES,
  payload: { num }
});

export const setEpisodesNameFilter = (filterValue, filterInput) => ({
  type: types.SET_EPISODES_FILTERS,
  payload: { filterValue, filterInput }
});
