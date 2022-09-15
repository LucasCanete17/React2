import { createContext, useContext, useState } from "react"

export const CartContext = createContext();


export const CartProvider = ({children})=>{
    const [cart, setCart]= useState([])

    const addItem = (item) =>{
        const existsInCart = cart.find((prod)=> prod.id === item.id)
        if(existsInCart){
            const carritoActualizado = cart.map((prod)=>{
                if(prod.id === item.id){
                    return{...prod, quantity:prod.quantity + item.quantity}
                }else{
                    return prod
                }
            })
            setCart(carritoActualizado)
        }else{
            setCart([...cart,  item])
        }
        

    }
    const clear = () =>{
        setCart([])
    }

    const removeItem = (id) =>{
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    const isIncart = (id) =>{
        return cart.some((prod)=> prod.id === id)
    }




    return(
        <CartContext.Provider value = {{cart, clear, removeItem, isIncart, addItem}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = ()  => useContext(CartContext)