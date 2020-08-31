import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);