import React from 'react';
import { getNextID, store } from '..';

const AddTodo = () => {
  let input;

  return (
    <div>
      <input
        ref={(node) => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            id: getNextID(),
            text: input.value,
          });
          input.value = '';
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
