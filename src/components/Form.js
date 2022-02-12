import React, { useContext, useRef, useState } from 'react'
import { getFirestore } from '../firebase/firebase';
import { cartContext } from '../context/CartProvider';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';



export const Form = () => {
    const{cart,total} = useContext(cartContext);
    const {id}=useParams();
    const[orderId,setOrderId]=useState('');
    const nameRef=useRef();
    const emailRef=useRef();
    const phoneRef=useRef();
    console.log(cart)   


    function handleClick(){
            const db= getFirestore();
            const orders = db.collection("Orders");
           

            const ticket ={
                buyer:{
                    name: nameRef.current.value,
                    email:emailRef.current.value,
                    phone: phoneRef.current.value,
                },
               total: total(),
                items: [{cart}],
            }
            
           

    orders.add(ticket)
    .then(({id})=>{
        console.log('orden ingresada'+id);
        setOrderId(id);
    })
    .catch((err)=>{
        console.log(err);
    });
}

  return (
    <>
    {orderId && (<h1>Felicitaciones, tu order es: {orderId}</h1>)}
    <div>
        <h3>Ingresa tus datos:</h3>
        <input type="text" name="name" ref={nameRef} placeholder="Nombre y Apellido"/>
        <br/>
        <input type="text" name="phone" ref={phoneRef} placeholder="Teléfono"/>
        <br/>
        <input type="text" name="email" ref={emailRef} placeholder="Correo"/>
        <br/>
        <button onClick={()=>handleClick()}>Terminar Compra</button>
    </div>
    </>
  )
}
