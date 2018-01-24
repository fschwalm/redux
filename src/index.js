import React from 'react';
import reactDom from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import todoApp from './reducers/todoApp';
import TodoApp from './components/TodoApp';

const store = createStore(todoApp);
let nextTodoId = 0;

const getNextID = () => nextTodoId++;

const render = () => {
  reactDom.render(<TodoApp todos={store} />, document.getElementById('root'));
};

store.subscribe(render);
render();

export { getNextID, store };
