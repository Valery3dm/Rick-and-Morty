import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CustomInput from '../components/CustomInput';
import CustomTable from '../components/CustomTable';
import {
  fetchLocationsData,
  setLocationsFilters,
  setPageLocations
} from '../store/locations/actions';

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
    name,
    cel1: type,
    cel2: dimension
  }))

  const tableHeadData = ['Name', 'Type', 'Dimension'];
  const filterDataLocations = ['name', 'type', 'dimension'];

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
