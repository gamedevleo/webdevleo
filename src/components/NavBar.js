import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'


const NavBar = () =>
  <nav id='navigator'>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/projects'>Projects</Link>
      </li>
    </ul>
  </nav>

export default NavBar;
