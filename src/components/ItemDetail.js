import { Button, Card } from '@mui/material';
import { Box, display } from '@mui/system';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import React , { useState }from 'react';
import './ItemDetail.css';


 const ItemDetail = ({item}) => {
  const [counter, setCounter] = useState(1)
  const add = () => {
    setCounter(counter + 1);
   
  }
  const reduce = () => {
      setCounter(counter + -1);
    }
    const disableAdd = () => {
      return counter >= item.stock ? true : false;
    };
    const disableReduce = () => {
      return counter <= 1 ? true : false;
    };
    const onAdd=()=>{

      return alert("Usted ha agregado "+counter+ " productos al carrito")
    }

    return (
        <div>
          <Card >
            <Button
         
            >
              
            </Button>
            <div>
            <img

            style={{width: '25%',
        display:'inline-block'}}
              src={item.srcimg}
              alt={item.title}
            />
            <Button>
             
            </Button>
            <Box style={{ padding: "10px" ,  width: '50%', display:'inline-block'} }>
              <h1>{item.title}</h1>
            
             
              Autor:<h3>{item.info.autor}</h3>
              Género: <h3>{item.info.genero}</h3>
              Tipo: <h3>{item.info.tipo}</h3>
              <h2>{item.info.description}</h2>
            
              <h1>$ {item.precio}</h1>
              <CardActions>
          <Box
             display='flex'
             alignItems='flex'
             marginLeft='25%'
             >
            <Button size="small" onClick={reduce} disabled={disableReduce()}>-</Button>
            <p>{counter}</p>
            <Button size="small" onClick={add} disabled={disableAdd()}>+</Button>
         </Box>
        
      </CardActions>
              
            </Box>
            <Box style={{ padding: "10px", marginTop: "10px" }}>
              <h2>Llega mañana</h2>
              <p> Cantidad: 1 unidad ({item.stock}disponibles) </p>
              <Button size="large" color="primary">
                Comprar ahora
              </Button>
            </Box>
            </div>
           
            
          </Card>
        </div>
      );
    };
    export default ItemDetail;