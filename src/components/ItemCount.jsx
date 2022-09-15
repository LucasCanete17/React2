import React from 'react';

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
        <button onClick={restar}>
          -
        </button>
        <span >{count}</span>
        <button  onClick={sumar}>
          +
        </button>
      </div>
      <button  onClick={onAdd}>
        Comprar
      </button>
    </div>
  );
};

export default ItemCount;