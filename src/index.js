import React from 'react';
import reactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import todoApp from './reducers/todoApp';
import TodoApp from './components/TodoApp';

let nextTodoId = 0;

const getNextID = () => nextTodoId++;

reactDom.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root'),
);

export { getNextID };
