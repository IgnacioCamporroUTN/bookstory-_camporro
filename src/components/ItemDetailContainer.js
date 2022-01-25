import React, { useState, useEffect } from "react";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [arrayDeProductos, setArrayDeProductos] = useState([]);

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          title: "Dune",
          stock: 8,
          precio: "100",
          info: { genero: "Ciencia Ficcion", tipo: "Novela",autor: "Frank Herbert",description:"Dune es una novela de ciencia ficción escrita por Frank Herbert en 1965. Su éxito fue rotundo; en 1966 ganó el Premio Hugo y en 1965 la primera edición del Premio Nébula a la mejor novela de ciencia ficción.",
        },

          srcimg: ["https://images-na.ssl-images-amazon.com/images/I/81ym3QUd3KL.jpg"
            
          ],
        },
      ]);
    }, 2000);
  });

  useEffect(() => {
    getItem.then((res) => {
      setArrayDeProductos(res);
    });
  }, []);

  return (
    <div>
      <ul>
        <li style={{ listStyle: "none" }}>
          {arrayDeProductos.map((item) => (
            <div>
              <ItemDetail item={item} />
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default ItemDetailContainer;