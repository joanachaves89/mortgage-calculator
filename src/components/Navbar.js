import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import React from 'react'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
      <Toolbar>
        <Typography variant="h5" component="p">
          Bank of React
        </Typography>
      </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar;
