import React, { useState, useEffect } from "react";
import {ItemDetail} from "./ItemDetail.js";
import { useParams } from 'react-router-dom';
import { Item } from "./Item.js";

const ItemDetailContainer = () => {
  const [added, setAdded] = useState([]);
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