import React from 'react'

const ItemDeatil = ({productDetail}) => {

    const {name, descripcion, }= productDetail
  return (
    <div>
        <h2> Detalle de {name}</h2>
        <p> {descripcion}</p>
        
    </div>
  )
}

export default ItemDeatil