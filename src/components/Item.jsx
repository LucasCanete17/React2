import React from 'react';
import {product} from '../mocks/moksData'
import { useNavigate } from 'react-router-dom';

export default function Item({productos}) {
    const {img, id, descripcion, price, stock}= productos
    const navegar= useNavigate()

    return (
        <div className='card' style={{width:'18rem', margin:'.5rem'}}>
            <p>{productos.name}</p>
            
            <img className='imagen'
                src = {productos.img} alt=''
                width={200}
                height={260}
            />
                
                
            <h3>{`Precio: $${productos.price}`} </h3>
            <h3>Stock: {productos.stock}</h3>
            


            
            <button onClick={()=>navegar(`/detalle/${id}`)} style={{margin:".5rem"}}> Ver Mas </button>
            
        </div>
    )
}
