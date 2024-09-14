import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ResultPage from './components/ResultPage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/result/:countryName" element={<ResultPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
