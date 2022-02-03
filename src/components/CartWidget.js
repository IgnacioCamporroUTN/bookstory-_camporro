import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Button } from '@mui/material';



export const CartWidget = () => {
    return (
        <div>
        <Button  color="inherit">
          <ShoppingCartIcon color="inherit">Carrito</ShoppingCartIcon>
          0
        </Button>
   
        </div>
    )
}
