import React, {useState, useEffect } from 'react';
import ItemList from './ItemList';
import {data} from '../mocks/moksData'
import {product} from '../mocks/moksData'


export default function Promesa() {

  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState ([]);
  const [error, setError] = useState('');
    
   data
    .then((res) => {
      setProductos(res);
    })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setLoading(false)
    });

  return (
    <div>
       {loading ? <p>'Loading...</p> : <ItemList productos={product}/>}
      
    </div>
  )}