import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { CartWidget } from './CartWidget';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link } from 'react-router-dom';


export  function NavBar(initial) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
       color="secondary"
       style={{ }}>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            text-decoration= "none"
          >
            <div  text-decoration= "none">
            <Link to={"/"} underline="none">Bookstore</Link>
            </div>
             
      
          </IconButton>
        
      <div>
        <PopupState variant="popover" popupId="demo-popup-menu">
  {(popupState) => (
    <React.Fragment>
      <Button  color="secondary" variant="contained" {...bindTrigger(popupState)}>
        Categorías
      </Button>
      <Menu {...bindMenu(popupState)}>
        <MenuItem onClick={popupState.close}>
          <Link to={"/categoria/CienciaFiccion"}>Ciencia Ficción</Link>
        </MenuItem>
        <MenuItem onClick={popupState.close}>
        <Link to={"/categoria/Terror"}>Terror</Link>
        </MenuItem>
        <MenuItem onClick={popupState.close}>
        <Link to={"/categoria/Fantasia"}>Fantasía</Link>
        </MenuItem>
        
      </Menu>
    </React.Fragment>
  )}
</PopupState>
      </div>
      <Link to={"/cart"}   underline="none">
      <CartWidget color="inherit" >Carrito</CartWidget>
      </Link>                        
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}
