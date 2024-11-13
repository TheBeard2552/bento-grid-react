// src/App.js

import React from 'react';
import BentoGrid from './components/BentoGrid';
import './App.css'; // We'll create this file next

function App() {
  return (
    <div className="app-container">
      <h1>Brown Bag Games</h1>
      <BentoGrid />
    </div>
  );
}

export default App;
