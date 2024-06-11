import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './component/LoginComponent';
import Dashboard from './component/Dashboard'; // Misalnya komponen untuk dashboard e-learning
import PrivateRoute from './component/PrivateRoute';
import PageNotFound from './component/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> 
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;