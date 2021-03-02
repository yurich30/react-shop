import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { productLikeReducer } from './store/ProductLikeReducer';

const store = createStore(
  productLikeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
  
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  ,
  document.getElementById('root')
);