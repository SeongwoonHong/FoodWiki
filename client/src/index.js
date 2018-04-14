import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

const isDevelopment = process.env.NODE_ENV === 'development';
const store = createStore(
  reducers,
  isDevelopment ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : null,
  applyMiddleware(reduxThunk)
);

window.store = store;

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

