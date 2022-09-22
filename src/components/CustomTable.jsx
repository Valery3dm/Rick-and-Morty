import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import CustomPagination from "./CustomPagination";

const CustomTable = ({
  rows,
  countPages,
  currentPage,
  handlerPageChange,
  tableHeadData,
}) => (
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
            {row.data.map((cell, idx) => (
              <TableCell key={idx}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <CustomPagination
      countPages={countPages}
      currentPage={currentPage}
      handlerPageChange={handlerPageChange}
    />
  </TableContainer>
);

export default CustomTable;
