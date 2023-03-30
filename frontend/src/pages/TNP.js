import React from 'react';
import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom';

import ActiveForms from '../components/ActiveForms';
function TNP() {
  return (
    <div>
      <h1>TNP Page</h1>
      <p>This is the page of the TNP section.</p>
    
      <ActiveForms />
    </div>
  );
}

export default TNP;
