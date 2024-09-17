import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WeatherProvider } from './Context/Weather';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // console.log(WeatheProvider);
  <React.StrictMode>
<WeatherProvider>  <App/></WeatherProvider>
    
      
     
  
  </React.StrictMode>
);

