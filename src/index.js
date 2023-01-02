import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.scss';

import TextoInicial from './components/HomePage/TextoInicial';
import Engrenangem from './components/HomePage/Engrenagem';
import FotoInicial from './components/HomePage/FotoInicial';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TextoInicial />
    <Engrenangem />
    <FotoInicial />
  </React.StrictMode>
);
