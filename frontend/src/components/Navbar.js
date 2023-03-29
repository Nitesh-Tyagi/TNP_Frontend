import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
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
        <li>
          <Link to="/Login">Login</Link>
        </li>
        </ul>
    </nav>
  );
}

export default Navbar;
