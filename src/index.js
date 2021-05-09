import React from 'react';
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "normalize.css"; 
import './index.css';

const Root = () => {
  return(
    <BrowserRouter>
      <App />    
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
