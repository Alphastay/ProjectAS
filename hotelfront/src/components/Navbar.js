import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import "../styles/Nav.css";
import logo from "../assets/logo.png";


function Navbar()  {
  const [showMenu, setShowMenu] = useState(false);
  const navigate=useNavigate();


  const handleNavigate = (path, target) => {
    navigate(path);
    setTimeout(() => {
      document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    }, 100); 
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar_logo">
          <img src={logo} alt="Logo" />

          <h2>Alpha Stay</h2>
        </div>
      
        <div className="navbar_menu" id="navbarMenu">
    
          <RouterLink activeClass="active" to="/" onClick={() => setShowMenu(false)} className="navItemMenu" >
            Home
          </RouterLink>
          <div  onClick={()=>{handleNavigate('/header-content','ourMission')}} className="navItemMenu">
            Our Mission
          </div>
          <div  onClick={()=>{handleNavigate('/header-content','why_choose_AlphaStay')}} className="navItemMenu">
            Why Alpha Stay
          </div>
          <div  onClick={()=>{handleNavigate('/header-content','listing')}} className="navItemMenu">
            List Your Hotel
          </div>
          <div  onClick={()=>{handleNavigate('/header-content','listing')}} className="navItemMenu">
            Help
          </div>
          <div  onClick={()=>{handleNavigate('/header-content','listing')}} className="navItemMenu">
            Contact
          </div>
          <RouterLink activeClass="active" to="/login"  >
            Login
          </RouterLink>
        </div>

        <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
          <i className="bx bx-menu"></i>
        </div>

        <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
          <RouterLink to="/" className="listItem" onClick={() => setShowMenu(false) }>Home</RouterLink>
          <div onClick={() => { setShowMenu(false); handleNavigate('/header-content', 'ourMission'); }} className="listItem">
            Our Mission
          </div>
          <div onClick={() => { setShowMenu(false); handleNavigate('/header-content', 'why_choose_AlphaStay'); }} className="listItem">
            Why Alpha Stay
          </div>
          <div onClick={() => { setShowMenu(false); handleNavigate('/header-content', 'listing'); }} className="listItem">
            List Your Hotel
          </div>
          <div onClick={() => { setShowMenu(false); handleNavigate('/header-content', 'listing'); }} className="listItem">
            Help
          </div>
          <div onClick={() => { setShowMenu(false); handleNavigate('/header-content', 'listing'); }} className="listItem">
            Contact
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
