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

reactDom.render(<TodoApp />, document.getElementById('root'));

export { store, getNextID, getVisibleTodos };
