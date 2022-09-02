import React from 'react';
import Item from './Item';

export default function ItemListItemList({ productos }){

    return (
      <div>
          <ul>
              {productos.map(producto  => {
              return  <Item productos={producto} />
              })}
          </ul>
      </div>
    )
  }

/*export default function ItemListItemList({ productos })
return(
    <div>
    {productos.map((productos) =>(
        <div>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.price}</p>
        </div>
        </div>
        ))}
)*/
