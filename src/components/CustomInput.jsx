import React from "react";
import { Box, Input, InputLabel } from "@mui/material";

const CustomInput = ({
  filterDataLocations,
  currentValue,
  handleFilterChange,
  pageName
}) => (
    <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: "wrap"}}>
      {filterDataLocations.map((item) => (
        <Box key={item} mr={4}>
          <InputLabel id={`simple-${pageName}-search-${item}-label`}>{item}</InputLabel>
          <Input
            labelid={`simple-${pageName}-search-${item}-label`}
            id={`simple-${pageName}-${item}-search`}
            label={`${item}Input`}
            value={currentValue(item)}
            onChange={(e) => handleFilterChange(e, `${item}Input`)}
          />
        </Box>
      ))}
    </Box>
  );
export default CustomInput;
