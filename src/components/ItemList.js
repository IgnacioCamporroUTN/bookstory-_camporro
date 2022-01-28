import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemCount } from './ItemCount';

export const ItemList = ({listadoDeProductos}) => {
    const {category}=useParams();
    const[arrayDeProductos, setArrayDeProductos]= useState([]);

    useEffect(()=>{
        setArrayDeProductos(listadoDeProductos.filter(item=>item.genero===category))
    },[category])
    
 
    return (
        <div >
                
                {
                arrayDeProductos.map(item=> <ItemCount item={item} /> )
                 }
            
            
        </div>
    )
}
