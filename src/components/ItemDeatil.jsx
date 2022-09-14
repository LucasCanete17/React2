import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDeatil = ({productDetail}) => {
    const [count, setCount] = useState(1);
    const [compra, setCompra]= useState(false)
    const {name, descripcion, price, stock} = productDetail
    const navegar = useNavigate()
    
    const onAdd=()=>{
         console.log(`Compraste ${count} items del producto ${name}`)
         setCompra(true) 
    }
  return (
    <div className='card' style={{width:'18rem', margin:'.5rem', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <h2> Detalle de {name}</h2>
        <p> {descripcion}</p>
        <p> $ {price}</p>
        <p> Stock: {stock}</p>
        
        
        { !compra
         ? <ItemCount stock={stock} initial={1} onAdd={onAdd} count={count} setCount={setCount}/>
         : <button onClick={()=>navegar('/cart')}> Ir al Carrito </button>}
        
        
        <img className='imagen'
                width={200}
                height={260}
                src={productDetail.img} />
        
             

    </div>
    
  )
}

export default ItemDeatil