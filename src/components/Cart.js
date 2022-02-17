import { Button} from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartProvider';
import { CartItem } from './CartItem';

export const Cart = () => {
  const{cart,addItem,clearCart,total} = useContext(cartContext);
   console.log(cart); 
   const totalItem=(element)=>{
    return element.counter * element.item.precio}
  return (
    <>
{cart.length === 0 ?
<div>
  <h1>Carro vacío</h1>
  <Button>
  <Link to={"/"}>Volver a la home</Link>
  </Button>
  
</div>
:
<div>
   {cart.map(element =><CartItem key={element.item.id} element={element} totalItem={totalItem} addItem={addItem}/>
    )}
    <Button size="large">
    <Link to={"/ticket"}>Pagar total ${total()}</Link>
    </Button>
    <Button size="large" onClick={clearCart}>Limpiar Carrito</Button>
    </div>
}    
    </>
  );
};
