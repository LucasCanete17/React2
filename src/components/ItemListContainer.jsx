import React, {useState, useEffect } from 'react';
import ItemList from './ItemList';
import {data} from '../mocks/moksData'
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebase'


const ItemListContainer = () =>{
  const [productList, setProductList]= useState([])
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState ([]);
  const [setError] = useState('');
  const{categoriaId}= useParams();
  
  
  //firebase
/*
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
      setProductList(lista)
    })
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))
  },[categoriaId])*/






//mock

  useEffect(()=>{})
   data
    .then((res) => {
      if(categoriaId){
        setProduct(res.filter((item)=> item.categoria === categoriaId))

        }else{
        setProduct(res)
        }
      })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setLoading(false)
    },[categoriaId]);
    console.log(productList)
  return (
    <div>
       {loading ? <p>'Loading...</p> :
        <ItemList productos={product}/>}
       
      
    </div>
  )}

  export default ItemListContainer