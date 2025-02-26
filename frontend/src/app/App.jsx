import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Navbar from '../components/Navbar';
import ThemeToggle from '../components/ThemeToggle';
import { useSelector } from 'react-redux';
import '../styles/global.css';

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <div data-theme={theme}>
      <Router>
        <Navbar />
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;