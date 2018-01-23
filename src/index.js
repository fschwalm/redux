import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import counter from './reducers/counter';
import Counter from './components/Counter';
import { increment, decrement } from './actions/actions';

const store = createStore(counter);

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => {
      store.dispatch(increment());
    }}
    onDecrement={() => store.dispatch(decrement())}
  />,
  document.getElementById('root'),
);

store.subscribe(render);
render();

registerServiceWorker();
