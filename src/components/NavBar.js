import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export  function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
       color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           Bookstory
          </IconButton>
          <Button color="inherit">Productos</Button>
          <Button color="inherit">Contacto</Button>
          <Button color="inherit">Carrito</Button>
          
       
        </Toolbar>
      </AppBar>
    </Box>
  );
}
