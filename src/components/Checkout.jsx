import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { db } from '../firebase/firebase'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const [comprador, setComprador]= useState({})
    const [orderId, setOrderId]= useState('')
    const {cart, cartTotal, clear}= useCart()
    const navigate = useNavigate ()

    const datosComprador = (e)=> {
        setComprador({
            ...comprador,
            [e.target.name]:e.target.value
        })
    }

    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(Object.values(comprador).length !== 3){
            alert('ojo')
        }else{
            const ventas = collection(db,"orders")
        addDoc(ventas, {
            comprador,
            items: cart,
            total: cartTotal(),
            date: serverTimestamp()
        })
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
        }

        
    }

  return (
    <div> 
    {!orderId
       ?<div>
       <h2> Checkout </h2>
        <h3> Complete los campos </h3>
        <form className='formulario' onSubmit={finalizarCompra}>
            <input type="text" placeholder='Nombre y Apellido' name="name" onChange={datosComprador} />
            <input type="number" placeholder='0351157686323' name="phone"  onChange={datosComprador}/>
            <input type="email" placeholder='algo@gmail.com' name="email" onChange={datosComprador} />
            <button> Finalizar Compra </button>
        </form>
       </div>
       :
       <div>
        <h2> Muchas gracias por su compra! </h2>
        <h3> Su pedido es: {orderId}</h3>
        <button onClick={()=> navigate('/')}> Inicio </button>
       </div> }
    </div>
  )
}

export default Checkout