import React from "react";
import "../styles/Sidebar.css";
import { Link, useNavigate } from "react-router-dom";


function Sidebar() {
  const navigate = useNavigate();
 
  // const handleUpdateClick = () => {
  //   const hotelId = prompt("Please enter the registered email to update:");
  //   if (hotelId) {
  //     navigate(`/updatehotel/${hotelId}`);
  //   }
  // };

  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <Link to="/" className="sidebar-option">
          <div className="icon" style={{ color: "black", fontSize: " 1.6rem" }}>
            <i class="bx bx-home-circle"></i>
          </div>
          <p>Home</p>
        </Link>
         
                    <Link to="/addhotel" className="sidebar-option">
                        <div className="icon" style={{ color: "black", fontSize: "1.6rem" }}>
                            <i className="bx bx-add-to-queue"></i>
                        </div>
                        <p>Add Hotel</p>
                    </Link>
                
        <Link to="/update" className=" sidebar-option ">       
          <div className="icon" style={{ color: "black", fontSize: " 1.6rem" }}>
            <i class="bx bx-recycle"></i>
          </div>
          <p>Update Details</p>
        </Link> 
      </div>
    </div>
  );
}

export default Sidebar;
