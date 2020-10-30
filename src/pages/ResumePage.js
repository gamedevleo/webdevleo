import React from 'react';
import {Link} from 'react-router-dom';
import placeholder from '../images/placeholder.png';
import '../css/ResumePage.css';


const ResumePage =() =>
<section id="resumeBody">
  <div className='header'>
    <h1>Kaiyang Li</h1>
    <h3>Developer</h3>
  </div>
  <div className="content">
    <div className="skills">
      <h4>Professional Skills</h4>
      <ul className="professionalSkills">
        <li>HTML</li>
        <li>CSS</li>
        <li>React.js</li>
        <li>Javascript</li>
        <li>Unity3D</li>
        <li>C#</li>
        <li>C++</li>
        <li>Github</li>
      </ul>
      <h4>Personal Skills</h4>
      <ul className="personalSkills">
        <li>
          Excellent Time Management
        </li>
        <li>
          Communication skill
        </li>
        <li>
          Willingness to learn
        </li>
        <li>
          Strong problem-solving skills
        </li>
        <li>
          Reliable Teamwork
        </li>
      </ul>
      <div>
        <h4>Education</h4>
        <p>AIT</p>
      </div>
    </div>

  <div className='projects'>
    <h4>Projects</h4>
    <div>
      <div>
        <h3>Project1</h3>
        <div className='img'>
          <img src={placeholder} alt='project1'></img>
          <p>Explain</p>
        </div>
      </div>
      <div>
        <h3>Project2</h3>
        <div className='img'>
          <img src={placeholder} alt='project1'></img>
          <p>Explain</p>
        </div>
      </div>
      <div>
        <h3>Project3</h3>
        <div className='img'>
          <img src={placeholder} alt='project1'></img>
          <p>Explain</p>
        </div>
      </div>
    </div>
  </div>
  </div>

</section>



export default ResumePage;
