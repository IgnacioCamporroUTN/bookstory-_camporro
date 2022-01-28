import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import  ItemD  from './ItemD.js';

export const ItemDetail = ({arrayDeProductos}) => {
    const {id}=useParams();
    const[productosPorId, setProductosPorId]= useState([]);
    console.log(arrayDeProductos);

   useEffect(()=>{
        
      setProductosPorId(arrayDeProductos.filter(item=>item.id===id))
   
    },[])
    
 
    return (
        <div >
               {
                   productosPorId.map(item=> <ItemD item={item} /> )
                 }
            
            
        </div>
    )
}
