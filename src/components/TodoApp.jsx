import React, { Component } from 'react';
import { getNextID, store } from '..';

class TodoApp extends Component {
  render() {
    return (
      <div>
        <input
          ref={(node) => {
            this.input = node;
          }}
        />
        <button
          onClick={() => {
            store.dispatch({
              type: 'ADD_TODO',
              text: this.input.value,
              id: getNextID(),
            });
            this.input.value = '';
          }}
        >
          Add Todo
        </button>
        <ul>
          {store.getState().todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
