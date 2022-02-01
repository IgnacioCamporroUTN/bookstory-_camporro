import React, { useState, useEffect } from "react";
import {ItemDetail} from "./ItemDetail.js";
import { useParams } from 'react-router-dom';
import { Item } from "./Item.js";

const ItemDetailContainer = () => {
  const [added, setAdded] = useState([]);
  const {idP}=useParams();
  const[productos, setProductos]= useState([]);

  useEffect(()=>{
    fetch("../json/productos.json")
    .then((res) => res.json())
    .then((datos) => {
      setProductos(datos);
    });

    },[]);

   const onAdd =(counter)=>{
     console.log(`Agregaste ${productos.title}, cantidad: ${counter}.`);
     setAdded(true);
   }
   

  return (
    <div>
     {productos.filter(
            (item) =>
              idP == item.id && (
                <div>
                  <ItemDetail onAdd={onAdd} item={item} added={added} />
                </div>
              )
          )}         
    </div>
  );
};

export default ItemDetailContainer;