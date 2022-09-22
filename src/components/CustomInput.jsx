import React from "react";
import { Box, Input, InputLabel } from "@mui/material";

const CustomInput = ({
  filterDataLocations,
  currentValue,
  handleFilterChange,
  pageName
}) => {
  return (
    <>
      {filterDataLocations.map((item) => (
        <Box key={item}>
          <InputLabel id={`simple-${pageName}-search-${item}-label`}>{item}</InputLabel>
          <Input
            labelId={`simple-${pageName}-search-${item}-label`}
            id={`simple-${pageName}-${item}-search`}
            label={`${item}Input`}
            value={currentValue(item)}
            onChange={(e) => handleFilterChange(e, `${item}Input`)}
          />
        </Box>
      ))}
    </>
  );
};

export default CustomInput;
