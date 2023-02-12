import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RoutingContext from './Components/Context/RoutingContext';
import FormValuesContext from './Components/Context/FormValuesContext';
import ErrorContext from './Components/Context/ErrorContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormValuesContext>
      <RoutingContext>
        <ErrorContext>
          <App/>
        </ErrorContext>
      </RoutingContext>
    </FormValuesContext>
  </React.StrictMode>
);

