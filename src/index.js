import React from 'react';
import reactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import todoApp from './reducers/todoApp';
import TodoApp from './components/TodoApp';

const persistedState = {
  todos: [{
    id: '0',
    text: 'Welcome back!',
    completed: false,
  }],
};

const store = createStore(todoApp, persistedState);

reactDom.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root'),
);
