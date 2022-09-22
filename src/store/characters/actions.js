import * as types from "./actionTypes";

export const fetchCharactersData = (page, gender, status, species) => ({
    type: types.LOAD_CHARACTERS_DATA,
    payload: { page, gender, status, species }
});

export const setPageCharacters = num => ({
    type: types.SET_PAGE_CHARACTERS,
    payload: { num }
});

export const setCharacters = characters => ({
    type: types.SET_CHARACTERS,
    payload: { characters }
});

export const setFilterCharacters = (filterValue, filterName) => ({
    type: types.SET_FILTER_VALUE_CHARACTERS,
    payload: { filterValue, filterName }
});
