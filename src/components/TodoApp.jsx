import React, { Component } from 'react';
import { getNextID, getVisibleTodos, store } from '..';
import FilterLink from './FilterLink';

class TodoApp extends Component {
  render() {
    const { todos, visibilityFilter } = this.props;

    const visibleTodos = getVisibleTodos(todos, visibilityFilter);
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
          {visibleTodos.map(todo => (
            <li
              key={todo.id}
              onClick={() => store.dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
        <p>
          Show:{' '}
          <FilterLink filter="SHOW_ALL" currentFilter={visibilityFilter}>
            All
          </FilterLink>
          {', '}
          <FilterLink filter="SHOW_ACTIVE" currentFilter={visibilityFilter}>
            Active
          </FilterLink>
          {', '}
          <FilterLink filter="SHOW_COMPLETED" currentFilter={visibilityFilter}>
            completed
          </FilterLink>
        </p>
      </div>
    );
  }
}

export default TodoApp;
