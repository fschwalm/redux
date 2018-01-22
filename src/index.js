import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counter from './reducers/counter';

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
