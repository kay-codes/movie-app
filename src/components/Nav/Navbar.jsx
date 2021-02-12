import React from 'react';
import Button from '../Button';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navBar'>
             <a href='#' className='logo'> MOVISO </a> 
          <div className='navBarRight'>     
           <ul>
             <li><a href='#'>Home</a></li> 
              <li><a href='#'>Movie</a></li>
              <li><a href='#'>FAQ</a></li>
              <li><a href='#'><Button /></a></li>
              </ul>
          </div>
        </div>

    )
}
export default Navbar

