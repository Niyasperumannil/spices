import React, { useEffect, useState } from 'react';
import './LoadingAnimation.css';
import Hero from '../../Pages/Hero/Hero';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000); // 3 seconds delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      {loading ? <LoadingAnimation /> : <Hero />}
    </div>
  );
}

function LoadingAnimation() {
  return (
    <div className="loading-container">
      <div className="loading-animation">
        <span className="arc arc1"></span>
        <span className="arc arc2"></span>
        <span className="arc arc3"></span>
        <span className="arc arc4"></span>
        <span className="arc arc5"></span>
      </div>
    </div>
  );
}

export default App;
