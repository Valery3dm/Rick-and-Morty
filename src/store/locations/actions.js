import * as types from "./actionTypes";

export const fetchLocationsData = (page, nameFilter, typeFilter, dimensionFilter ) => ({
  type: types.LOAD_LOCATIONS_DATA,
  payload: { page, nameFilter, typeFilter, dimensionFilter }
});

export const setLocations = locations => ({
  type: types.SET_LOCATIONS,
  payload: { locations }
});

export const setPageLocations = num => ({
  type: types.SET_PAGE_LOCATIONS,
  payload: { num }
});

export const setLocationsFilters = (filterValue, filterInput) => ({
  type: types.SET_LOCATIONS_FILTERS,
  payload: { filterValue, filterInput }
});
