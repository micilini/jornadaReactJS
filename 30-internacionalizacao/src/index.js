import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import './i18n';//Importa o arquivo de configuração do i18n (Suporte a Internacionalização)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
