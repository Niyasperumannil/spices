import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingAnimation from './Components/LoadingAnimation/LoadingAnimation';
import Dashboard from './Pages/Admin/Dashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoadingAnimation />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;