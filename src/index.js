import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RoutingContext from './Components/Context/RoutingContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutingContext>
      <App />
    </RoutingContext>
  </React.StrictMode>
);

