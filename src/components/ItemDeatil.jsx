import React from 'react';
import {product} from '../mocks/moksData'
import ItemCount from './ItemCount';

const ItemDeatil = ({productDetail}) => {

    const {name, descripcion, price, stock}= productDetail
    const onAdd=()=>{

    }
  return (
    <div className='card' style={{width:'18rem', margin:'.5rem', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <h2> Detalle de {name}</h2>
        <p> {descripcion}</p>
        <p> $ {price}</p>
        <p> Stock: {stock}</p>
        <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        
        
        <img className='imagen'
                width={200}
                height={260}
                src={productDetail.img} />
        <button style={{margin:".5rem"}}> Ver Mas </button>
             

    </div>
    
  )
}

export default ItemDeatil