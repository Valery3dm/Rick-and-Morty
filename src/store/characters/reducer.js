import * as types from "./actionTypes"

const initialState = {
  characters: {
    currentPage: 1,
    countPages: 0,
    filterValues: {
      gender: '',
      status: '',
      species: ''
    },
    data: [],
  }
}

const charactersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_PAGE_CHARACTERS:
      return {
        ...state,
        characters: {
          ...state.characters,
          currentPage: payload?.num
        }
      }
    case types.SET_CHARACTERS:
      return {
        ...state,
        characters: {
          ...state.characters,
          countPages: payload?.characters?.info?.pages,
          data: [
            ...payload?.characters?.results
          ]
        }
      }
    case types.SET_FILTER_VALUE_CHARACTERS:
      return {
        ...state,
        characters: {
          ...state.characters,
          currentPage: 1,
          filterValues: {
            ...state.characters.filterValues,
            [payload?.filterName]: payload?.filterValue
          }
        }
      }

    default:
      return state;
  }
}

export default charactersReducer;
