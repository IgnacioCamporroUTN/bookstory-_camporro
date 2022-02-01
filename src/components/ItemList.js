import React from 'react'
import {Item} from './Item.js';

export const ItemList = ({item, category}) => {
    return (
        <div>
          <ul>
            <li style={{ listStyle: "none" }}>
              {item.map((item) =>
                category ? (
                  category == item.category && (
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
