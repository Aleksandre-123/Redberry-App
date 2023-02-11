import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RoutingContext from './Components/Context/RoutingContext';
import ValidationContext from './Components/Context/ValidationContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ValidationContext>
      <RoutingContext>
        <App/>
      </RoutingContext>
    </ValidationContext>
  </React.StrictMode>
);

