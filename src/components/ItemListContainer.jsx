import React from 'react'

const ItemListContainer = (props) => {
    const{saludo} = props
  return (
    <div> 
        <p>{saludo}</p>
    </div>
  )
}

export default ItemListContainer