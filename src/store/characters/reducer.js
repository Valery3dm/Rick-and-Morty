import * as types from "./actionTypes"

const initialState = {
  currentPage: 1,
  countPages: 0,
  filterValues: {
    gender: '',
    status: '',
    species: ''
  },
  data: [],
  isError: false
}

const charactersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_PAGE_CHARACTERS:
      return {
        ...state,
        currentPage: payload?.num
      }
    case types.SET_CHARACTERS:
      return {
        ...state,
        countPages: payload?.characters?.info?.pages,
        data: [
          ...payload?.characters?.results
        ],
        isError: false
      }
    case types.SET_FILTER_VALUE_CHARACTERS:
      return {
        ...state,
        currentPage: 1,
        filterValues: {
          ...state.filterValues,
          [payload?.filterName]: payload?.filterValue
        }
      }
    case types.SET_CHARACTERS_LOAD_ERROR:
      return {
        ...state,
        isError: true
      }
    default:
      return state;
  }
}

export default charactersReducer;
