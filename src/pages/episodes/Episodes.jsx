import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";

import {
  fetchEpisodesData,
  setEpisodesNameFilter,
  setPageEpisodes,
} from "../../store/episodes/actions";

import CustomTable from "../../hooks/CustomTable";
import CustomInput from "../../hooks/CustomInput";
import { filterDataLocations, tableHeadData } from "./constants";

export const Episodes = () => {
  const dispatch = useDispatch();
  const {
    data,
    currentPage,
    countPages,
    filterValues: { nameInput },
    isError,
  } = useSelector((state) => state.episodesReducer);

  useEffect(() => {
    dispatch(fetchEpisodesData(currentPage, nameInput));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, nameInput]);

  const handleFilterChange = (event, filterInput) => {
    dispatch(setEpisodesNameFilter(event.target.value, filterInput));
  };

  const rows = data.map(({ id, name, air_date, episode }) => ({
    id,
    data: [name, air_date, episode],
  }));

  const currentValue = (item) => {
    if (item) {
      return nameInput;
    }
  };

  return (
    <>
      <CustomInput
        filterDataLocations={filterDataLocations}
        currentValue={currentValue}
        handleFilterChange={handleFilterChange}
        pageName="episodes"
      />
      {!isError ? (
        <CustomTable
          rows={rows}
          countPages={countPages}
          currentPage={currentPage}
          handlerPageChange={setPageEpisodes}
          tableHeadData={tableHeadData}
        />
      ) : (
        <Typography id="error" variant="h6" component="h2">
          Nothing found
        </Typography>
      )}
    </>
  );
};
