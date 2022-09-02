import React, {useState, useEffect } from 'react';
import ItemList from './ItemList';


export default function Promesa() {

  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState ([]);
  const [error, setError] = useState('');

  
    const promesaProductos = new Promise((res, rej) =>{
      setTimeout(() => {
        res([
          {id:  100, name: 'combo 1', price: 800, img: 'https://i.postimg.cc/Yq3VSzZ6/4d0f15a8-ce16-45b3-89b9-b257d0bae1e1.jpg'},
          {id: 101, name: 'combo 2', price: 1500, img: 'https://i.postimg.cc/Yq3VSzZ6/4d0f15a8-ce16-45b3-89b9-b257d0bae1e1.jpg'},
          {id: 102, name: 'combo 3', price: 2500, img: 'https://i.postimg.cc/Yq3VSzZ6/4d0f15a8-ce16-45b3-89b9-b257d0bae1e1.jpg'},
        ]);
      },2000);
    });
    
    promesaProductos
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
      <p> Loading: {loading ? 'Loading...': 'fin'}</p>
      <ItemList productos={productos}/>
    </div>
  )}