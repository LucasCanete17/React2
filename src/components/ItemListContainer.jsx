import React, {useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebase'


const ItemListContainer = () =>{
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState ([]);
  const{categoriaId}= useParams();
  
  
  //firebase

  useEffect(()=>{
    setLoading(true)
    const productos = categoriaId ? query(collection(db, "products"), where("categoria",  "==", categoriaId)) : collection(db, "products")
    getDocs(productos)
    .then((result)=>{
      const lista = result.docs.map((product)=>{
        return{
          id:product.id,
          ...product.data()
        }
      })
      setProduct(lista)
    })
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))
  },[categoriaId])

  return (
    <div>
       {loading ? <p>'Loading...</p> :
        <ItemList productos={product}/>}
       
      
    </div>
  )}

  export default ItemListContainer