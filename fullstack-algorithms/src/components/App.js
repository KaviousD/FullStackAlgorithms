import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './Splash';
import Home from './Home';
import About from './About';
import Functions from './Functions';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/functions" element={<Functions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
