import React from 'react';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import '../css/HomePage.css'



const HomePage = () =>
  <div id='container'>
    <div id='header'>
      <h1 className='headerContent'>Kaiyang Li</h1>
      <h4 className='headerContent'>Web developer | React developer</h4>
      <div className='headerContent'>
        <a href='https://github.com/gamedevleo' target='_blank' rel="noopener noreferrer">
          <img src={github} alt='github' height ='50' width='50'/>
        </a>
        <a href='https://www.linkedin.com/in/leo-li-960499196/' target='_blank' rel="noopener noreferrer">
          <img src={linkedin} alt='linkedin' height ='50' width='50'/>
        </a>
      </div>
    </div>
    <div className="about">
      <div className="content">
        <p>Hi, I am Kaiyang. I completed my Bachelor's degree in game programming at AIT(Academy of Information Technology) in March,2020.<br />
         I am a faster learner and learning new techniques quickly, as well as having good communication skills. I am loofing for a react developer now.
        </p>
        <p>I am a self-motivated graduate developer. I
        am keen to learn new knowledge that can solve problems. Usually, I spend most
        of my time on books and tutorials, I typed all the code in tutorials and books to
        learn. As a fast learner, I am confident to work in a new environment and use
        everything I learned to do all the tasks.
        </p>
      </div>
      <div className="contact">
        <ul>
          <li>
            <span><b>Address:</b></span>
            <span>	&nbsp;	&nbsp;Sydney</span>
          </li>
          <li>
            <span><b>Email:</b></span>
            <span>	&nbsp;	&nbsp;	&nbsp;	&nbsp;gamedevleo@gmail.com</span>
          </li>
          <li>
            <span><b>Phone:</b></span>
            <span>	&nbsp;	&nbsp;	&nbsp;	&nbsp;+0466627022</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
;

export default HomePage;
