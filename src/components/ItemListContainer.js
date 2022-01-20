import React from 'react'

import { ItemList } from './ItemList';

export const ItemListContainer = (props) => {
    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemList />
        </div>
    )
}
