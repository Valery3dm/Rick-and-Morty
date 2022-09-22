import * as types from "./actionTypes"

const initialState = {
  currentPage: 1,
  countPages: 0,
  filterValues: {
    nameInput: ''
  },
  data: [],
  isError: false
}

const episodesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_EPISODES:
      return {
        ...state,
        countPages: payload?.episodes?.info?.pages,
        data: [
          ...payload?.episodes?.results
        ],
        isError: false
      }
    case types.SET_PAGE_EPISODES:
      return {
        ...state,
        currentPage: payload?.num
      }
    case types.SET_EPISODES_FILTERS:
      return {
        ...state,
        currentPage: 1,
        filterValues: {
          ...state.filterValues,
          [payload.filterInput]: payload?.filterValue
        }
      }
    case types.SET_EPISODES_LOAD_ERROR:
      return {
        ...state,
        isError: true
      }
    default:
      return state;
  }
}

export default episodesReducer;
