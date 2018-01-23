import React from 'react';
// import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counter from './reducers/counter';

const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};

const store = createStore(counter);

const initialRender = () => {
  document.body.innerText = store.getState();
};

store.subscribe(initialRender);
initialRender();
document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
