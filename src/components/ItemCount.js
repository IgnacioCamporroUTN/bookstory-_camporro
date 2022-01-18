import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';




export const ItemCount = (props) => {

    const [counter, setCounter] = useState(1)
    const add = () => {
      setCounter(counter + 1);
     
    }
    const reduce = () => {
        setCounter(counter + -1);
      }
      const disableAdd = () => {
        return counter >= props.stock ? true : false;
      };
      const disableReduce = () => {
        return counter <= 1 ? true : false;
      };

      return(
          <> 
                   
        <Card sx={{ maxWidth: 345 }}>
        <img  width="50%" src={props.srcimg}  alt={props.title}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Dune es una novela de ciencia ficción escrita por Frank Herbert en 1965. Su éxito fue rotundo; en 1966 ganó el Premio Hugo y en 1965 la primera edición del Premio Nébula a la mejor novela de ciencia ficción.
        </Typography>
      </CardContent>
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

      <CardActions>

          <Box
           display='flex'
           alignItems='flex'
           marginLeft='20%'>
          <Button size="big" >Agregar al carrito</Button>
          </Box>
      
      </CardActions>

    </Card>
         
         
          </> 
      );
}
