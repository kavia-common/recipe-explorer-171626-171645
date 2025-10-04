import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

/**
 * PUBLIC_INTERFACE
 * React entrypoint: mounts the app and sets up BrowserRouter.
 */
/**
 * PUBLIC_INTERFACE
 * React entrypoint: mounts the app and sets up BrowserRouter.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
