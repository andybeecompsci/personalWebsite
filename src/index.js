import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import home from './pages/home';
import Personal from './pages/personal';
import Home from './pages/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
//route to individual pages
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<App />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
