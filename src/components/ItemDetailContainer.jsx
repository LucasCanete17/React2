import React, { useEffect, useState} from 'react'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { useParams } from 'react-router-dom'
import { data } from '../mocks/moksData'
import ItemDeatil from './ItemDeatil'




const ItemDEtailContainer = () => {
    const [productDetail, setProductDetail]= useState({})
    const [loading, setLoading] = useState(true);
    const{id} = useParams()


    useEffect(()=>{
      const coleccionProductos = collection(db, "products")
      const referenciaDoc = doc(coleccionProductos, id)
      getDoc(referenciaDoc)
      .then((result)=>{
        setProductDetail({
          id:result.id,
          ...result.data()
        })
      })
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
    },[])
/*
    useEffect(()=>{
        data
        .then((res)=> setProductDetail(res.find((product)=> product.id === id)))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[id])
*/
  return (
    <div className="cardContainer">
        {loading ? <p> Cargando...</p> : <ItemDeatil productDetail={productDetail}/>}         
    </div>
  )
}

export default ItemDEtailContainer