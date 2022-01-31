import React, { useState, useEffect } from "react";
import {ItemDetail} from "./ItemDetail.js";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [arrayDeProductos, setArrayDeProductos] = useState([]);
  const {idP}=useParams();
  const[productosPorId, setProductosPorId]= useState([]);

  useEffect(()=>{

    setTimeout(()=>{
      setArrayDeProductos([ {id:"001",title: "Dune",stock: 8,precio: "3100",genero: "CienciaFiccion", tipo: "Novela",autor: "Frank Herbert",description:"Dune es una novela de ciencia ficción escrita por Frank Herbert en 1965. Su éxito fue rotundo; en 1966 ganó el Premio Hugo y en 1965 la primera edición del Premio Nébula a la mejor novela de ciencia ficción.",srcimg: "https://images-na.ssl-images-amazon.com/images/I/81ym3QUd3KL.jpg" ,},
        {id:"002", title: '1984', stock: 10, precio:"2000",genero: "Fantasia", tipo:"Novela",autor:"George Orwell",description:"1984 de George Orwell es una novela de distopía cuya trama ocurre en Oceanía, un país dominado por un gobierno totalitario que mantiene en constante vigilancia a sus ciudadanos e, incluso, insiste en espiar sus pensamientos para mantener el orden.", srcimg:"https://img.dememoria.mx/2019/06/91SZSW8qSsL.jpg"},
        {id:"003", title: 'The Lord of the Rings', stock: 5, precio:"3000", genero: "Fantasia", tipo:"Novela", autor:"Tolkien", description:"Los Anillos de Poder fueron forjados en antiguos tiempos por los herreros Elfos, y Sauron, el Señor Oscuro, forjó el Anillo Único. Pero en una ocasión se lo quitaron, y aunque lo buscó por toda la Tierra Media nunca pudo encontrarlo. ", srcimg:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F03%2F25%2FLOTR_2-2000.jpg"},
        {id:"004", title: 'Carrie', stock: 5, precio:"1500", genero: "Terror", tipo:"Novela", autor:"Stephen King", description:"Carrie tiene su primer período en la ducha en la escuela secundaria. Las otras chicas, poco sensibles, le gritan y le arrojan tampones. Una chica, Sue Snell, se siente mal por toda la cruel escena. Pero, por supuesto, ella no hace nada para detenerlo. Después que la profesora de gimnasia, descubra qué está pasando, castiga a los alborotadores. El líder de los matones luego culpa a Carrie por meterla en problemas. Esta chica, que se llama Chris Hargensen, comienza a planear su venganza. ", srcimg:"https://images.cdn1.buscalibre.com/fit-in/360x360/25/3b/253b35902bbebc059355fa26c19d9dc4.jpg"},])
    },500)
   
    },[])

    useEffect(()=>{ 
      setArrayDeProductos(arrayDeProductos.filter(item=>item.id==idP))
    },[idP])
    

  return (
    <div>
      <ul>
        <li style={{ listStyle: "none" }}>
                {
                   arrayDeProductos.map(item=> <ItemDetail item={item} /> )
                 }
        </li>
      </ul>
    </div>
  );
};

export default ItemDetailContainer;