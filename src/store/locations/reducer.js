import * as types from "./actionTypes";

const initialState = {
  locations: {
    currentPage: 1,
    countPages: 0,
    filterValues: {
      nameInput: '',
      typeInput: '',
      dimensionInput: '',
    },
    data: []
  }
}

const locationsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_LOCATIONS:
      return {
        ...state,
        locations: {
          ...state.locations,
          countPages: payload?.locations?.info?.pages,
          data: [
            ...payload?.locations?.results
          ]
        }
      }
    case types.SET_PAGE_LOCATIONS:
      return {
        ...state,
        locations: {
          ...state.locations,
          currentPage: payload?.num
        }
      }
    case types.SET_LOCATIONS_FILTERS:
      return {
        ...state,
        locations: {
          ...state.locations,
          currentPage: 1,
          filterValues: {
            ...state.locations.filterValues,
            [payload.filterInput]: payload?.filterValue
          }
        }
      }
    default:
      return state;
  }
}

export default locationsReducer;
