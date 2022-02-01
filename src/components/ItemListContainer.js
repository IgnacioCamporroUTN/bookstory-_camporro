import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, useParams, Link } from "react-router-dom";
import { Item } from './Item';

export const ItemListContainer = (props) => {
 const {category}=useParams();
 const[listadoDeProductos, setListadoDeProductos]= useState([]);
//  const[arrayDeProductos, setArrayDeProductos]= useState([]);

useEffect(()=>{
    fetch("../json/productos.json")
    .then((response) => response.json())
    .then((datos) => {
      setListadoDeProductos(datos);
    });
    },[]);

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
