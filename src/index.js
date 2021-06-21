import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/reset.css';
// import './assets/css/color.less';
import App from './views/app/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
