import React,{Component} from 'react';
import '../css/home.css'



class NavBar extends Component {
  render(){
    return(
      <>
        <div id = 'navbar'>
          <a className='active' href = "#">Home</a>
          <a href = 'test.html' target='_blank'>Resume</a>
          <a href="#">Practice</a>
        </div>
      </>
    )
  }
}


export default NavBar;
