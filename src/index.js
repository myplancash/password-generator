import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
/* ReactDOM.createRoot(document.querySelector('#root').render(<App />)) */

root.render(<App />)