import React from 'react';
import reactDom from 'react-dom';
import './index.css';
import configureStore from './configureStore';
import Root from './components/Root';

const store = configureStore();

reactDom.render(<Root store={store} />, document.getElementById('root'));
