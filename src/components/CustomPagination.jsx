import React from "react";
import { Pagination } from "@mui/material";
import { useDispatch } from "react-redux";

const CustomPagination = ({ countPages, currentPage, handlerPageChange }) => {
  const dispatch = useDispatch();

  return (
    <Pagination
      count={countPages}
      page={currentPage}
      onChange={(_, num) => dispatch(handlerPageChange(num))}
    />
  );
};

export default CustomPagination;
