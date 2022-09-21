import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodesData, setEpisodesNameFilter, setPageEpisodes } from '../store/episodes/actions';
import { Box, Input, InputLabel } from '@mui/material';
import TableComponent from '../components/TableComponent';


export const Episodes = () => {
  const dispatch = useDispatch();
  const { data, currentPage, countPages, nameFilter } = useSelector(state => state.episodesReducer.episodes);
  
  useEffect(() => {
    dispatch(fetchEpisodesData(currentPage, nameFilter))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, nameFilter])

  const rows = data.map(({id, name, air_date, episode}) => ({
    id,
    name,
    cel1: air_date,
    cel2: episode
  }))

  const tableHeadData = ['Name', 'Air date', 'Episodes']

  return (
    <>
      <Box>
        <InputLabel id="simple-episodes-search-label">Name</InputLabel>
        <Input
          labelId="simple-episodes-search-label"
          id="simple-episodes-search"
          label="Name"
          value={nameFilter}
          onChange={(e) => dispatch(setEpisodesNameFilter(e.target.value))}
        />
      </Box>
      <TableComponent
        rows={rows}
        countPages={countPages}
        currentPage={currentPage}
        handlerPageChange={setPageEpisodes}
        tableHeadData={tableHeadData}
      />
    </>
  )
}
