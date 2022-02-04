import { Button, Card, CardContent, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { cartContext } from '../context/CartProvider';

export const CartItem = ({element,totalItem}) => {
const{addItem,deleteItem}=useContext(cartContext);
  return (
    <Card margin="30px" height="150px">
           <Box height="250px" width="100%">
              <CardContent >
                <img src={element.item.srcimg} alt={element.item.title} width="50px" height="100%" display="inline-block"/>
                <Typography gutterBottom variant="h5" component="div" width="100%">
                  {element.item.title}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                {element.counter} Unidades
                </Typography>
                <Typography marginTop="10px" variant="body2" color="text.secondary">
                ${totalItem(element)}
                </Typography>
              <Button size="small"onClick={()=>deleteItem(element.item.id)}>Borrar item</Button>
             
              
               </CardContent>
           </Box>      
    </Card>
)
  
}
