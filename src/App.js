import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar.js';
import './css/App.css';

import HomePage from './pages/HomePage.js';
import ProjectsPage from './pages/ProjectsPage.js';
import NotFoundPage from './pages/NotFoundPage.js';
import WeatherApp from './pages/WeatherApp.js';
import {Clock} from './pages/ClockPage';

function App(){
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className='content'>
          <Switch>
            <Route path='/' component={HomePage} exact/>
            <Route path='/projects' component={ProjectsPage}/>
            <Route path='/weatherapp' component={WeatherApp}/>
            <Route path='/clock' component={Clock} />
            <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
