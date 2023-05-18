import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);
const root = ReactDOM.createRoot(
    rootElement as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
