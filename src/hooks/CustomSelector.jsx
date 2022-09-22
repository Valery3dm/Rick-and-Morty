import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";
import { Box } from "@mui/system";

const Selector = ({
  filterDataCharacters,
  currentValue,
  handleFilterChange,
}) => {
  return (
    <Box sx={{ minWidth: 120, mt: 1, mb: 1 }}>
      {filterDataCharacters.map((el, idx) => (
        <FormControl key={idx} sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id={`simple-select-${el.label}-label`}>
            {el.label}
          </InputLabel>
          <Select
            labelid={`simple-select-${el.label}-label`}
            id={`simple-select-${el.label}`}
            value={currentValue(el.label)}
            label={el.label}
            onChange={(event) => handleFilterChange(event, el.label)}
          >
            {el.values.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </Box>
  );
};

export default Selector;
