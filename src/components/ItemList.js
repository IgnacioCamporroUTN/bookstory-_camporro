import React, { useState, useEffect } from 'react'

import { ItemCount } from './ItemCount';

export const ItemList = () => {

  
    const [arrayDeProductos, setArrayDeProductos] = useState([]);

    const stockDeProductos = new Promise((resolve,reject)=>{
        setTimeout(()=>{
                resolve([

                    {title: 'Dune', stock: 5, description:"Dune es una novela de ciencia ficción escrita por Frank Herbert en 1965. Su éxito fue rotundo; en 1966 ganó el Premio Hugo y en 1965 la primera edición del Premio Nébula a la mejor novela de ciencia ficción.",
                    srcimg:"https://images-na.ssl-images-amazon.com/images/I/81ym3QUd3KL.jpg"},
                   {title: '1984', stock: 10, description:"1984 de George Orwell es una novela de distopía cuya trama ocurre en Oceanía, un país dominado por un gobierno totalitario que mantiene en constante vigilancia a sus ciudadanos e, incluso, insiste en espiar sus pensamientos para mantener el orden.",
                    srcimg:"https://img.dememoria.mx/2019/06/91SZSW8qSsL.jpg"},
                   {title: 'The Lord of the Rings', stock: 5, description:"Los Anillos de Poder fueron forjados en antiguos tiempos por los herreros Elfos, y Sauron, el Señor Oscuro, forjó el Anillo Único. Pero en una ocasión se lo quitaron, y aunque lo buscó por toda la Tierra Media nunca pudo encontrarlo. ", 
                   srcimg:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F03%2F25%2FLOTR_2-2000.jpg"},
                       
                ]);

        },2000)

    })
    
    useEffect(()=>{
        stockDeProductos
        .then(res=>{
            setArrayDeProductos(res)
        })
    }, [])

    return (
        <div>
            <ul>
                <li>
                {
                arrayDeProductos.map(item=> <ItemCount item={item} /> )
            }
                </li>
            </ul>
            
        </div>
    )
}
