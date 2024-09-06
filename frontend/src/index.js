import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TicketProvider } from './context/TicketContext';
import { AuthProvider } from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <TicketProvider>
        <App />
      </TicketProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
