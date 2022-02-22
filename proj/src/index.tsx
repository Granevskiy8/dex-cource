import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Error404 from './pages/404/Error404';
import { BrowserRouter } from 'react-router-dom';
// import Registration from './pages/Registretion/Registration';
// import Authorization from './pages/Authorization/Authorization';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const store = setupStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
