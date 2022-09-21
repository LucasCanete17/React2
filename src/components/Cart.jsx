/*import React from 'react'
import { useCart} from '../context/CartContext'

const Cart = () => {
  const {cart}=useCart()
  console.log('carrito', cart)
  return (
    <div>Cart</div>
  )
}

export default Cart*/


import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'

const Cart = () => {
const {cart,  cartTotal, clear}=useCart()
const navegar = useNavigate()
console.log(cart)
  return (
    <div>
      {
        !cart.length 
        ?<div>
          <h2>Tu carrito esta vacio!</h2>
          <h4>Te invitamos a ver nuestros productos</h4>
          <button onClick={()=>navegar('/')}>Ir a comprar</button>
        </div>
        :<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h2>Tu carrito</h2>
            {cart.map((compra)=>
             <CartItem key={compra.id} compra={compra}/>)}
            <span>Total a pagar : ${cartTotal()}</span>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2rem'}}>
            <button  onClick={clear}>Vaciar Carrito</button>
            <button>Terminar compra</button>
            </div>
        </div>
      }
    </div>
  )
}

export default Cart