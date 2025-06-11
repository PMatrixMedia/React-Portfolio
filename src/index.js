// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Or 'react-dom'
import RoutesComponent from './Components/Routes/Routes'; // Adjust path
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesComponent /> {/* This component already contains the Router */}
  </React.StrictMode>
);