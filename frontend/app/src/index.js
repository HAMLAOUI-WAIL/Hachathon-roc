import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

import './styles/index.css';
import App from './componant/App';
import reportWebVitals from './reportWebVitals';
// import "bootstrap/dist/css/bootstrap.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <App />
  </BrowserRouter>
    
  
);

reportWebVitals();
