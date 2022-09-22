import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <Typography id="error" variant="h6" component="h2">
      Sorry, page not found. Go <Link to=''>home</Link>
    </Typography>
  )
}
