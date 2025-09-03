import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingAnimation from './Components/LoadingAnimation/LoadingAnimation';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoadingAnimation />} />
    </Routes>
  );
};

export default App;