"use client";
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
export type NavBarProps = {
	// types...
}

const NavBar: React.FC<NavBarProps>  = ({}) => {
	return (
		<div>
 			      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
       
        <HorizontalSplitIcon  />
     

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
 		</div>
	);
};

export default NavBar;
