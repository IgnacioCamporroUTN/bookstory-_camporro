import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Link} from 'react-router-dom';



export const ItemCount = ({stock,onAdd}) => {


    const [counter, setCounter] = useState(1)
    const add = () => {
      setCounter(counter + 1);
    }
    const reduce = () => {
        setCounter(counter + -1);
      }
      const disableAdd = () => {
        return counter >= stock ? true : false;
      };
      const disableReduce = () => {
        return counter <= 1 ? true : false;
      };
    
      return(
          <> 
                   
        <Card sx={{ maxWidth: 345, margin:10, display:'inline-block'}}>
      
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
    
          <Box
           display='flex'
           alignItems='flex'
           marginLeft='20%'>
          <Button size="big" onClick={onAdd}>Agregar al carrito</Button>
          </Box>
      
      </CardActions>

    </Card>
         
         
          </> 
      );
}
