import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchEpisodesData,
  setEpisodesNameFilter,
  setPageEpisodes
} from '../store/episodes/actions';
import CustomTable from '../components/CustomTable';
import CustomInput from '../components/CustomInput';


export const Episodes = () => {
  const dispatch = useDispatch();
  const {
    data,
    currentPage,
    countPages,
    filterValues: {
      nameInput
    }
  } = useSelector(state => state.episodesReducer.episodes);
  
  useEffect(() => {
    dispatch(fetchEpisodesData(currentPage, nameInput))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, nameInput])

  const handleFilterChange = (event, filterInput) => {
    dispatch(setEpisodesNameFilter(event.target.value, filterInput));
  };

  const rows = data.map(({
    id,
    name,
    air_date,
    episode
  }) => ({
    id,
    name,
    cel1: air_date,
    cel2: episode
  }))

  const tableHeadData = ['Name', 'Air date', 'Episodes'];
  const filterDataLocations = ['name'];

  const currentValue = (item) => {
    if (item) {
      return nameInput
    }
  }

  return (
    <>
      <CustomInput
        filterDataLocations={filterDataLocations}
        currentValue={currentValue}
        handleFilterChange={handleFilterChange}
        pageName='episodes'
      />
      <CustomTable
        rows={rows}
        countPages={countPages}
        currentPage={currentPage}
        handlerPageChange={setPageEpisodes}
        tableHeadData={tableHeadData}
      />
    </>
  )
}
