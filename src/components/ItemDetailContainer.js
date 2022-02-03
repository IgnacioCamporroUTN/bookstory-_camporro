import React, { useState, useEffect, useContext } from "react";
import {ItemDetail} from "./ItemDetail.js";
import { useParams } from 'react-router-dom';
import { Item } from "./Item.js";
import { cartContext } from "../context/CartProvider.js";

const ItemDetailContainer = () => {
  const{addToCart}=useContext(cartContext);
  const [added, setAdded] = useState(false);
  const {id}=useParams();
  const[producto, setProducto]= useState({});

  useEffect(()=>{
    fetch("../json/productos.json")
    .then((res) => res.json())
    .then((datos) => {
      setProducto(datos.find((book)=>book.id===id));
    });

    },[]);

   const onAdd =(counter)=>{
     console.log(`Agregaste ${producto.title}, cantidad: ${counter}.`);
     addToCart(producto,counter)
     setAdded(true);
   }
   

  return (
    <div>
     
     <ItemDetail onAdd={onAdd} item={producto} added={added} />
     <p>{producto.title}</p>
               
                
    </div>
  );
};

export default ItemDetailContainer;