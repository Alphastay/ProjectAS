import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateComponent() {
  const auth = localStorage.getItem("adminEmail");

  if (!auth) {
    alert("Login required");
    return <Navigate to="/login"  />;
  }
  return(
<Outlet />
  ) 
}

export default PrivateComponent;
