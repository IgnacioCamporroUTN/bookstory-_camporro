import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Link} from 'react-router-dom';



export const ItemCount = ({item}) => {


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

      return(
          <> 
                   
        <Card sx={{ maxWidth: 345, margin:10, display:'inline-block'}}>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.title}   
        </Typography>
        <img  width="50%" src={item.srcimg}  alt={item.title}/>
        <Typography marginTop="10px" variant="body2" color="text.secondary">
        {item.description}
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

      <Box
           display='flex'
           alignItems='flex'
           marginLeft='20%'>
          <Button size="big" >
            
            <Link to="/item/:id">
            Ver detalles del producto
            </Link>
           </Button>
          </Box>

      <CardActions>
     
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
