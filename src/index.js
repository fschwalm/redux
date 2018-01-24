import React from 'react';
import reactDom from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import todoApp from './reducers/todoApp';
import TodoApp from './components/TodoApp';

const store = createStore(todoApp);
let nextTodoId = 0;

const getNextID = () => nextTodoId++;

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const render = () => {
  reactDom.render(<TodoApp {...store.getState()} />, document.getElementById('root'));
};

store.subscribe(render);
render();

export { store, getNextID, getVisibleTodos };
