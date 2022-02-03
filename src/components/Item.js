import { Card, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { CardContent } from '@mui/material';
import { Box } from '@mui/system';

export const Item = ({item}) => {
  return (
      <Card margin="30px" height="150px">
             <Box height="400px" width="200px">
                <CardContent >
                  <img src={item.srcimg} alt={item.title} width="150px" height="100%"/>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography marginTop="10px" variant="body2" color="text.secondary">
                      Precio: ${item.precio}
                      </Typography>
                  <Link to={`/item/${item.id}`}>Ver Detalles</Link>
                 </CardContent>
             </Box>      
      </Card>
  )
}