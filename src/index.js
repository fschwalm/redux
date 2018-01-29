import React from 'react';
import reactDom from 'react-dom';
import throttle from 'lodash/throttle';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import todoApp from './reducers/todoApp';
import TodoApp from './components/TodoApp';
import { loadState, saveState } from './localStorage';


const persistedState = loadState();
const store = createStore(todoApp, persistedState);

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos,
  });
}, 1000));

reactDom.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root'),
);
