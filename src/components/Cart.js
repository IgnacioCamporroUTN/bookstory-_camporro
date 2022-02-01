import React, { useContext } from 'react';
import { cartContext } from '../context/CartProvider';



export const Cart = () => {
    const{cart} = useContext(cartContext);
    console.log(cart);
  return (
    <div>
    CART
    </div>);
};
