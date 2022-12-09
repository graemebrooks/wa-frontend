import React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const StyledToolbar = styled(Toolbar)`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600');
  background-color: #06182c;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
`;

const Navbar = () => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        {/* <Typography variant="h6">My Navbar</Typography> */}
        <Button color="inherit" href="/">
          Home
        </Button>
        <Button color="inherit" href="/stats">
          Stats
        </Button>
        <Button color="inherit" href="/hof">
          HOF
        </Button>
        <Button color="inherit" href="/about">
          About
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
