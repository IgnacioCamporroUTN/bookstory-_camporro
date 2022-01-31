import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemCount } from './ItemCount';

export const ItemList = ({item}) => {
  
 
    return (
        <div >
               <ItemCount item={item}/>            
        </div>
    )
}
