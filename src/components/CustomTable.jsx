import {
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

const CustomTable = ({
  rows,
  countPages,
  currentPage,
  handlerPageChange,
  tableHeadData
}) => {
  const dispatch = useDispatch();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            {tableHeadData.map((headTitle, idx) => (
              <TableCell key={idx}>{headTitle}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                {row.name}
              </TableCell>
              <TableCell>{row.cel1}</TableCell>
              <TableCell>{row.cel2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        count={countPages}
        page={currentPage}
        onChange={(_, num) => dispatch(handlerPageChange(num))}
      />
    </TableContainer>
  );
};

export default CustomTable;
