import * as types from "./actionTypes"

const initialState = {
  episodes: {
    currentPage: 1,
    countPages: 0,
    nameFilter: '',
    data: []
  }
}

const episodesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_EPISODES:
      return {
        ...state,
        episodes: {
          ...state.episodes,
          countPages: payload?.episodes?.info?.pages,
          data: [
            ...payload?.episodes?.results
          ]
        }
      }
    case types.SET_PAGE_EPISODES:
      return {
        ...state,
        episodes: {
          ...state.episodes,
          currentPage: payload?.num
        }
      }
    case types.SET_EPISODES_FILTER_VALUE:
      return {
        ...state,
        episodes: {
          ...state.episodes,
          currentPage: 1,
          nameFilter: payload?.filterValue
        }
      }
    default:
      return state;
  }
}

export default episodesReducer;
