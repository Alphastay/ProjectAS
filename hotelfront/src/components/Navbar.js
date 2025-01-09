import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import "../styles/Nav.css";
import logo from "../assets/logo.png";


function Navbar()  {
  const [showMenu, setShowMenu] = useState(false);
  const navigate=useNavigate();


  const handleNavigate = (path, target) => {
    navigate(path);
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
          <div onClick={()=>{handleNavigate('/header-content')}} className="navItemMenu">
            About Alpha Stay
          </div>
          <RouterLink activeClass="active" to="/login" className="navItemMenu" >
            Login
          </RouterLink>
        </div>

        <RouterLink activeClass="active" to="/login" className="navItemMenuLogIn" >
            Login 
          </RouterLink>
        <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
          <i className="bx bx-menu"></i>
        </div>

        <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
          <RouterLink to="/" className="listItem" onClick={() => setShowMenu(false) }>Home</RouterLink>
          <div onClick={() => { setShowMenu(false); handleNavigate('/header-content'); }} className="listItem">
            About Alpha Stay
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
