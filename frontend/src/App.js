import React from 'react';
import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import TNP from './pages/TNP';
import AO from './pages/AO';
import SUP from './pages/SUP';
import VC from './pages/VC';
import Login from './pages/Login';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>  
          

          <Route path="/TNP" element={<TNP/>} />
          <Route path="/AO" element={<AO/>} />
          <Route path="/SUP" element={<SUP/>} />
          <Route path="/VC" element={<VC/>} />
          <Route path="/" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
