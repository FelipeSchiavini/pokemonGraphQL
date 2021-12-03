import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './styles/GlobalStyles.styles'


ReactDOM.render(
  <>
    <GlobalStyles/>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
  document.getElementById('root')
);

