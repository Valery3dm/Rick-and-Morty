import * as types from "./actionTypes";

const initialState = {
  currentPage: 1,
  countPages: 0,
  filterValues: {
    nameInput: '',
    typeInput: '',
    dimensionInput: '',
  },
  data: [],
  isError: false
}

const locationsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_LOCATIONS:
      return {
        ...state,
        countPages: payload?.locations?.info?.pages,
        data: [
          ...payload?.locations?.results
        ],
        isError: false
      }
    case types.SET_PAGE_LOCATIONS:
      return {
        ...state,
        currentPage: payload?.num
      }
    case types.SET_LOCATIONS_FILTERS:
      return {
        ...state,
        currentPage: 1,
        filterValues: {
          ...state.filterValues,
          [payload.filterInput]: payload?.filterValue
        }
      }
    case types.SET_LOCATIONS_LOAD_ERROR:
      return {
        ...state,
        isError: true
      }
    default:
      return state;
  }
}

export default locationsReducer;
