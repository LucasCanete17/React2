import React, {useState, useEffect } from 'react';
import ItemList from './ItemList';
import {data} from '../mocks/moksData'
import {product} from '../mocks/moksData'
import { useParams } from 'react-router-dom';


export default function Promesa() {

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState ([]);
  const [error, setError] = useState('');
  const{categoriaId}= useParams()
    

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

  return (
    <div>
       {loading ? <p>'Loading...</p> :
        <ItemList productos={product}/>}
       
      
    </div>
  )}