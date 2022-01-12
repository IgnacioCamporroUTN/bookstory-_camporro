import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { CartWidget } from './CartWidget';



export  function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
       color="secondary"
       style={{ background: '#2E3B55' }}>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           Bookstory
          </IconButton>
        
      <div>
          <Button color="inherit">Productos</Button>
          <Button color="inherit">Contacto</Button>
          
          <Button  color="inherit">
          <CartWidget color="inherit">Carrito</CartWidget>
          0
          </Button>

      </div>
          
                         
       
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}
