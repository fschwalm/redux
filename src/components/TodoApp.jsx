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
          {store.getState().todos.map(todo => (
            <li
              key={todo.id}
              onClick={() => store.dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
