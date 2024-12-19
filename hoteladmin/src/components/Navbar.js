import React from 'react'
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
    <img className='logo' src={logo} alt='Not Avail'/>
    <h2>Alpha Stay</h2>
    </div>
    <h3>Admin Page</h3>
    <Link to='login'>
    <p>Login</p></Link>
    <div className='profileIcon'>
      
    <i class='bx bxs-user-account' style={{color:'#a40707'}}  ></i>
    </div>
    
</div>
  )
}

export default Navbar