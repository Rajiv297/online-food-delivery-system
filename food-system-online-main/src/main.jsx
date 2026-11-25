import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App.jsx';
import { QuickBiteProvider } from './context/QuickBiteContext.jsx';

// Import CSS Stylesheets
import '../css/global.css';
import '../css/landing.css';
import '../css/customer.css';
import '../css/restaurant.css';
import '../css/delivery.css';
import '../css/admin.css';

const Router = import.meta.env.BASE_URL === '/' ? BrowserRouter : HashRouter;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <QuickBiteProvider>
        <App />
      </QuickBiteProvider>
    </Router>
  </React.StrictMode>
);
