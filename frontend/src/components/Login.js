import React from 'react';

import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';
import TNP from './TNP';
import AO from './AO';
import SUP from './SUP';
import VC from './VC';

function Login() {
  return (
    <div>
    <div>
      <h1>Login Page</h1>
      <p>This is the page of the Login section.</p>
    </div>

    <nav>
      <ul>
        <li>
          <Link to="/TNP">TNP</Link>
        </li>
        <li>
          <Link to="/AO">AO</Link>
        </li>
        <li>
          <Link to="/SUP">SUP</Link>
        </li>
        <li>
          <Link to="/VC">VC</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Login;
