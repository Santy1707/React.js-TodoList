import React from 'react';
import ReactDOM from 'react-dom/client';
/**
 * Añadimos bootstrap a nuestro proyecto, XD
 */
import 'bootstrap/dist/css/boostrap.css';
// ! Importante: los estilso propios deben ir debajo de los de boostrap para que no se pisen
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
