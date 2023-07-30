import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import NewArrivals from './pages/NewArrivals/NewArrivals';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/CYBERBALENCIAGA" element={<Home />} />
      </Route>
      <Route path="/CYBERBALENCIAGA/new-arrivals" element={<NewArrivals />} />
    </Routes>
  );
}

export default App;
