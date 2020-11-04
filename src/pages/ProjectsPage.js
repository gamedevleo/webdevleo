import React from 'react';
import {Link} from 'react-router-dom';
import '../css/projects.css';
import {DIV} from '../components/div';
const ProjectsPage = () =>(
  <div className='projects'>
    <h1>Projects</h1>
    <div className='projects-items'>
      <div className='project1 item'>
        <DIV/>
      </div>
      <div className='project2 item'>
        <p>This is a weather app!</p>
        <Link to='/weatherapp'>WeatherApp</Link>
      </div>
      <div className='project3 item'>
        <p>This is a Clock!</p>
        <Link to='/clock'>Clock</Link>
      </div>
      <div className='project4 item'>
        <p>This is a project!!!!</p>
        <Link to='/weatherapp'>WeatherApp</Link>
      </div>
      <div className='project5 item'>
        <p>This is a project!!!!</p>
        <Link to='/weatherapp'>WeatherApp</Link>
      </div>
    </div>

  </div>
)

export default ProjectsPage;
