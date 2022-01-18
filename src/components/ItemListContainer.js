import React from 'react'
import { ItemCount } from './ItemCount';

export const ItemListContainer = (props) => {
    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemCount 
             stock='8'
             initial='1' 
             srcimg="https://images-na.ssl-images-amazon.com/images/I/41et1gx5B7L._SX324_BO1,204,203,200_.jpg"
             title="Dune"/>
        </div>
    )
}
