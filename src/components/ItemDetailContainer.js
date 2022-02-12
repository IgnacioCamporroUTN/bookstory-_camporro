import React, { useState, useEffect, useContext } from "react";
import {ItemDetail} from "./ItemDetail.js";
import { useParams } from 'react-router-dom';
import { cartContext } from "../context/CartProvider.js";
import { getFirestore } from "../firebase/firebase.js";

const ItemDetailContainer = () => {
  const{addToCart}=useContext(cartContext);
  const [added, setAdded] = useState(false);
  const {id}=useParams();
  const[producto, setProducto]= useState({});

  useEffect(()=>{
    const db=getFirestore();
    const itemCollection = db.collection("Items");
    const miItem = itemCollection.doc(id);

    miItem.get()
    .then((doc)=>{
      if(!doc.exists){
        console.log("No existe ese producto")
        return
      }
      console.log("Producto encontrado")
      setProducto({id:doc.id,...doc.data()})

    })
    .catch((err)=>{
      console.log(err)
    })
    
    },[]);

   const onAdd =(counter)=>{
     console.log(`Agregaste ${producto.title}, cantidad: ${counter}.`);
     addToCart(producto,counter)
     setAdded(true);
   }
   
console.log(producto)
  return (
    <div>
     
     <ItemDetail onAdd={onAdd} item={producto} added={added} />
     <p>{producto.title}</p>
               
                
    </div>
  );
};

export default ItemDetailContainer;