import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Registration from './pages/Registretion/Registration';
import Authorization from './pages/Authorization/Authorization';
// import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Authorization/>
    {/* <Registration/> */}
  </React.StrictMode>,
  document.getElementById('root')
);
