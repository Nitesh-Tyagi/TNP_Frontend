import React from 'react';
import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import TNP from './components/TNP';
import AO from './components/AO';
import SUP from './components/SUP';
import VC from './components/VC';
import Login from './components/Login';

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
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
