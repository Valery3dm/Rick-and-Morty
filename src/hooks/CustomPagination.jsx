import React from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "@mui/material";


const CustomPagination = ({ countPages, currentPage, handlerPageChange }) => {
  const dispatch = useDispatch();

  return (
    <Pagination
      sx={{ mt: 1, mb: 1 }}
      count={countPages}
      page={currentPage}
      onChange={(_, num) => dispatch(handlerPageChange(num))}
    />
  );
};

export default CustomPagination;
