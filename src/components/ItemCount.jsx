import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd, count, setCount }) => {
  

  const restar = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  }

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <div>
        <button className="btn btn-danger" onClick={restar}>
          -
        </button>
        <span className="btn btn-ligth">{count}</span>
        <button className="btn btn-success" onClick={sumar}>
          +
        </button>
      </div>
      <button className="btn btn-primary m-2" onClick={onAdd}>
        Comprar
      </button>
    </div>
  );
};

export default ItemCount;