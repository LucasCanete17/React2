import React from "react";
import { useCart } from '../context/CartContext'
import LocalMallIcon from '@mui/icons-material/LocalMall';


const CartWidget = () => {
    const {cartQuantity} = useCart()
    return (
        <div> 
             <LocalMallIcon/>
            <span>{cartQuantity() || ''}</span>
           

        </div>   
       
    );
}

export default CartWidget