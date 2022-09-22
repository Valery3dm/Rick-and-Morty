import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

import {
  fetchCharactersData,
  setFilterCharacters,
  setPageCharacters,
} from "../../store/characters/actions";

import CharacterCard from "../../components/CharacterCard";
import CustomPagination from "../../hooks/CustomPagination";
import Selector from "../../hooks/CustomSelector";
import { filterDataCharacters } from "./constants";

export const Characters = () => {
  const dispatch = useDispatch();
  const {
    data,
    currentPage,
    countPages,
    filterValues: {
      gender,
      status,
      species
    }
  } = useSelector(
    (state) => state.charactersReducer.characters
  );

  useEffect(() => {
    dispatch(fetchCharactersData(currentPage, gender, status, species));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, gender, status, species]);

  const handleFilterChange = (event, filterName) => {
    dispatch(setFilterCharacters(event.target.value, filterName));
  };

  const currentValue = (label) => {
    switch(label) {
      case 'gender':
        return gender
      case 'status':
        return status
      default:
        return species
    }
  }

  return (
    <Box>
      <Selector 
        filterDataCharacters={filterDataCharacters}
        currentValue={currentValue}
        handleFilterChange={handleFilterChange}
      />
      <Grid container spacing={2}>
        {data.map((character) => (
          <Grid item xs={6} sm={4} md={2} key={character?.id}>
            <CharacterCard
              character={character}
            />
          </Grid>
        ))}
      </Grid>
      <CustomPagination
        countPages={countPages}
        currentPage={currentPage}
        handlerPageChange={setPageCharacters}
      />
    </Box>
  );
};
