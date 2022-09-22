import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchLocationsData,
  setLocationsFilters,
  setPageLocations
} from '../../store/locations/actions';

import CustomInput from '../../hooks/CustomInput';
import CustomTable from '../../hooks/CustomTable';
import { filterDataLocations, tableHeadData } from './constants';

export const Locations = () => {
  const dispatch = useDispatch();
  const {
    data,
    currentPage,
    countPages,
    filterValues: {
      nameInput,
      typeInput,
      dimensionInput,
    }
  } = useSelector(state => state.locationsReducer.locations);

  useEffect(() => {
    dispatch(fetchLocationsData(currentPage, nameInput, typeInput, dimensionInput))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, nameInput, typeInput, dimensionInput])

  const handleFilterChange = (event, filterInput) => {
    dispatch(setLocationsFilters(event.target.value, filterInput));
  };

  const rows = data.map(({
    id,
    name,
    type,
    dimension
  }) => ({
    id,
    data: [
      name,
      type,
      dimension
    ]
  }))

  const currentValue = (item) => {
    switch(item) {
      case 'name':
        return nameInput
      case 'type':
        return typeInput
      default:
        return dimensionInput
    }
  }

  return (
    <>
      <CustomInput
        filterDataLocations={filterDataLocations}
        currentValue={currentValue}
        handleFilterChange={handleFilterChange}
        pageName='locations'
      />
      <CustomTable
        rows={rows}
        countPages={countPages}
        currentPage={currentPage}
        handlerPageChange={setPageLocations}
        tableHeadData={tableHeadData}
      />
    </>
  );
}
