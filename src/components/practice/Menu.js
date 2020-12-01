import React from 'react';
import {Link} from 'react-router-dom';
import './menu.css';

export const Menu = () => {

  return (
    <div className='MenuContainer'>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/weatherApp'>WeatherApp</Link></li>
          <li className='four'><Link to='/clock'>Clock</Link></li>
        </ul>
        <ul className = 'social'>
          <li><a className='github' href='https://github.com/gamedevleo' target='_blank' rel="noopener noreferrer">Github</a></li>
          <li><a className='linkedin'href='https://www.linkedin.com/in/leo-li-960499196/' target='_blank' rel="noopener noreferrer">Linkedin</a></li>
        </ul>

      </nav>
    </div>
  )
}
