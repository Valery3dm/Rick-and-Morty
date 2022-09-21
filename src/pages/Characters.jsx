import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Pagination } from "@mui/material";
import { Box } from "@mui/system";

import {
  fetchCharactersData,
  setGenderFilterCharacters,
  setPageCharacters,
} from "../store/characters/actions";
import CharacterCard from "../components/CharacterCard";
import Selectors from "../components/Selectors";

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
    dispatch(setGenderFilterCharacters(event.target.value, filterName));
  };

  const filterDataCharacters = [
    {
      label: 'gender',
      values: ['', 'female', 'male', 'genderless', 'unknown']
    },
    {
      label: 'status',
      values: ['', 'alive', 'dead', 'unknown']
    },
    {
      label: 'species',
      values: ['', 'human', 'alien', 'unknown']
    }
  ];

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
      <Selectors 
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
      <Pagination
        count={countPages}
        page={currentPage}
        onChange={(_, num) => dispatch(setPageCharacters(num))}
      />
    </Box>
  );
};
