import React, { useEffect, useState} from 'react'
import { data } from '../mocks/moksData'
import ItemDeatil from './ItemDeatil'
/*import {data} from '../mocks/moksData'
import {product} from '../mocks/moksData'*/



const ItemDEtailContainer = () => {
    const [productDetail, setProductDetail]= useState({})
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        data
        .then((res)=> setProductDetail(res.find((product)=> product.id === 100)))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[])

  return (
    <div className="cardContainer">
        {loading ? <p> Cargando...</p> : <ItemDeatil productDetail={productDetail}/>}         
    </div>
  )
}

export default ItemDEtailContainer