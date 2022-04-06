import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import App from './App';

// render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('app'),
// )
createRoot(document.getElementById('app')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
)
;