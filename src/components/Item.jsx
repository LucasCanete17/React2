import React from 'react';

export default function Item({productos}) {

    return (
        <div>
            
                <img
                width={200}
                height={260}
                alt={productos.id}
                />
                <p>{productos.name}</p>
                <h3>{`Precio: $${productos.price}`} </h3>
            
        </div>
    )
}