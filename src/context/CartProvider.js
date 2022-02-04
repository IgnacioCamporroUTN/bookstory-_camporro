import React , {createContext, useState} from 'react';

export const cartContext = createContext();


const CartProvider = ({children}) => {
  const [cart, setCart]=useState([]);

  const addToCart = (product, counter)=>{
    if(isInCart(product.id)){
      const indexItem = cart.findIndex(ele=> ele.item.id ===product.id);
      cart[indexItem].counter = cart[indexItem].counter + counter;
      setCart([...cart]);
    }else{
      setCart([...cart,{item:product,counter}])
    }
    console.log(cart);
  }


  const cartIcon=()=>{
    const sumall = cart.map(item => item.counter).reduce((prev, curr) => prev + curr, 0);
    console.log(sumall);
    return sumall;
   }

   const total=()=>{
    const sum = cart.map(element => element.item.precio*element.counter).reduce((prev, curr) => prev + curr, 0);
    console.log(sum);
    return sum;
   }


  const isInCart=(id)=>{
    return cart.some(element=>element.item.id===id)
  }

  const addItem=(product,counter)=>{
    setCart([...cart,{item:product,counter}])
  }
  const deleteItem=(id)=>{
    const updatedCart=cart.filter(element=>element.item.id!==id);
    setCart(updatedCart);
  }
 const clearCart=()=>{
   setCart([]);
 }
    
  return (
    <cartContext.Provider value={{cart, addToCart,addItem,deleteItem,clearCart,cartIcon,total}}>
        {children}
    </cartContext.Provider>
  );
};
export default CartProvider;