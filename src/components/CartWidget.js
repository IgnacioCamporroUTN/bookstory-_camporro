import React,{ useContext } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Button } from '@mui/material';
import { cartContext } from '../context/CartProvider';


export const CartWidget = () => {
  const{cart,cartIcon} = useContext(cartContext);
    return (
      <>
      {cart.length === 0 ? <></>
      :
      <div>
      <Button  color="inherit">
        <ShoppingCartIcon color="inherit">Carrito</ShoppingCartIcon>
        {cartIcon()}
      </Button>
 
      </div>
      
      }
      </>  
    )
}
