import React from 'react';
import Item from './Item';


/*export default function */


const ItemList = ({ productos }) => {

    return (
      <div className="cardContainer">
          
              {productos.map((productos)=> <Item key={productos.id} productos={productos} />
              )}
          
      </div>
    )
  }


export default ItemList 