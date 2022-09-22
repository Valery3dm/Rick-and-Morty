import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";

const Selector = ({
  filterDataCharacters,
  currentValue,
  handleFilterChange,
}) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      {filterDataCharacters.map((el, idx) => (
        <FormControl key={idx} sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id={`simple-select-${el.label}-label`}>
            {el.label}
          </InputLabel>
          <Select
            labelId={`simple-select-${el.label}-label`}
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
