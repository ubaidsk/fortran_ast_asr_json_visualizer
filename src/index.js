import React from 'react';
import ReactDOM from 'react-dom/client';

import 'reactflow/dist/style.css';
import 'remixicon/fonts/remixicon.css'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
