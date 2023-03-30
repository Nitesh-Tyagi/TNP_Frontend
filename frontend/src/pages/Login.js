import React from 'react';

import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';
import TNP from './TNP';
import AO from './AO';
import SUP from './SUP';
import VC from './VC';
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <LoginForm />
    </div>
  );
}

export default Login;
