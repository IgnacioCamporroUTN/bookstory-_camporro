import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, useParams, Link } from "react-router-dom";
import { getFirestore } from '../firebase/firebase';
import { Item } from './Item';

export const ItemListContainer = (props) => {
 const {category}=useParams();
 const[listadoDeProductos, setListadoDeProductos]= useState([]);
//  const[arrayDeProductos, setArrayDeProductos]= useState([]);

useEffect(()=>{
  const db=getFirestore();
  const itemCollection = db.collection("Items")

  

  itemCollection.get()
  .then((querySnapShot)=>{
    if(querySnapShot.size==0){
      console.log("No hay documentos con ese query");
      return
    }
    console.log("Hay documentos");
    setListadoDeProductos(querySnapShot.docs.map((doc)=>{
      return {id:doc.id,...doc.data()}
    }));
  })
  .catch((err)=>{
    console.log(err);
  })
},[]);
console.log(listadoDeProductos)

    return ( <div>
        <ul>
          <li style={{ listStyle: "none" }}>
            <h1>{category}</h1>
            {listadoDeProductos.map((item) =>
              category ? (
                category == item.genero && (
                  <div style={{ display: "inline-block", padding: "10px" }}>
                    <Item item={item} />
                  </div>
                )
              ) : (
                <div style={{ display: "inline-block", padding: "10px" }}>
                  <Item item={item} />
                </div>
              )
            )}
          </li>
        </ul>
      </div>
    )
}
