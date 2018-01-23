import React from 'react';

function Counter({ value, onIncrement, onDecrement }) {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}

export default Counter;
