import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* ROUTER MODULE */
import { BrowserRouter } from 'react-router-dom';

/* CUSTOM PROVIDERS */
import CartProvider from './providers/cart/cart.provider';

ReactDOM.render(
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>,
  document.getElementById('root')
);
