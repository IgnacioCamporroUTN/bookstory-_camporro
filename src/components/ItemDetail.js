import { Button, Card } from '@mui/material';
import { Box} from '@mui/system';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';
import React from 'react';
import { ItemCount } from './ItemCount';

export const ItemDetail = ({onAdd, item, added}) => {
  
    return (
        <div >
            <Card >
            <Button>
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
              Autor:<h3>{item.autor}</h3>
              Género: <h3>{item.genero}</h3>
              Tipo: <h3>{item.tipo}</h3>
              <h2>{item.description}</h2>
              <h1>$ {item.precio}</h1>
              <Button size="small" color="primary">
              { added ? <Link to="/cart" size="medium">Ir al carrito</Link> : <ItemCount stock={item.stock} onAdd={onAdd}/>}
              </Button>
              
            </Box>
            <Box style={{ padding: "10px", marginTop: "10px" }}>
              <h2>Llega mañana</h2>
              <p> Cantidad: 1 unidad ({item.stock}disponibles) </p>
              
            </Box>
            </div>
           
            
          </Card>
            
        </div>
    )
}
