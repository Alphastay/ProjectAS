import React, { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://alphastay.vercel.app/api/loginadmins/loginadmin",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      const data =  response.data;
  
      
  
      if (response.status===200) {
        console.log("Login successful:", data);
        alert(data.message);
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", JSON.stringify(data));
        navigate("/");
      } 
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.error("Login failed:", error.response.data.message);
        alert("Incorrect email id and password");
      } else {
        console.error("An error occurred:", error.message);
        alert("An unexpected error occurred. Please try again.");
      }
    }
   
  };

  return (
    <div className="login" id="login">
      <form className="logincontainer" onSubmit={login}>
        <div className="Form login-form">
          <h2>Login</h2>
        </div>

        <div className="input-box">
          <i className="bx bxs-user-account"></i>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email"
            className="inputSession"
            required
          />
        </div>

        <div className="input-box">
          <span onClick={() => setPasswordVisible(!passwordVisible)}>
            {passwordVisible ? (
              <i className="bx bxs-lock-open"></i>
            ) : (
              <i className="bx bxs-lock"></i>
            )}{" "}
          </span>
          <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={passwordVisible ? "text" : "password"}
            placeholder="Your Password"
            className="inputSession"
            required
          />
        </div>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        <button className="btn">Login To AlphaStay</button>
      </form>
    </div>
  );
}

export default Login;
