import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RoutingContext from './Components/Context/RoutingContext';
import FormValuesContext from './Components/Context/FormValuesContext';
import FetchContext from './Components/Context/FetchContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FetchContext>
      <FormValuesContext>
        <RoutingContext>
            <App/>
        </RoutingContext>
      </FormValuesContext>
    </FetchContext>
  </React.StrictMode>
);

