import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [currState, setCurrState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  // const handleGoogleSuccess = async (response) => {
  //   const { credential } = response;
  //   console.log("Google Token:", credential);

  //   if (!credential) {
  //     console.error("No Google token received");
  //     return;
  //   }
  //   try {
  //     const res = await axios.post("https://alphastay.vercel.app/api/users", {
  //       idToken: credential },
  //       {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
        
  //     });
  //     const data = res.data;
  //     if (res.status===200) {
  //       localStorage.setItem("token", data.token);

  //       console.log("my token is", data.token);
  //       navigate("/");
  //     } else {
  //       console.error("Google Login failed:", data.message);
  //     }
  //   } catch (error) {
  //     console.error("Error during Google login:", error);
  //   }
  // };

  const login = async (e) => {
    e.preventDefault();
    console.log("email and password", email, password);
    try {
      let result = await axios.post(
        "https://alphastay.vercel.app/api/users/login",
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
     const data=result.data;
      console.log(data);
      if (data.success) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error while logging in");
      alert("error occurred during login");
    }
  };

  const signup = async (e) => {
    e.preventDefault();
    console.log("Signup executed", name, email, password);
    try {
      let result = await axios.post(
        "https://alphastay.vercel.app/api/users/signup",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = result.data;
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data));
      if (data.success) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error while signing in");
      alert("error occurred during signin");
    }
  };

  return (
    <div className="cont">
      <div className="logincontainer">
        <div className="Form login-form">
          <h2>{currState}</h2>
        </div>
        {/* <div className="google-login-container">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => {
              console.error("Google Login Failed");
            }}
          />
        </div> */}
        <h2>OR</h2>

        <form id="login">
          {currState === "Sign In" && (
            <div className="input-box">
              <i className="bx bxs-user"></i>
              <input
                name="username"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Your Name"
                className="inputSession"
                required
              />
            </div>
          )}

          <div className="input-box">
            <i className="bx bxs-user-account"></i>
            <input
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Your Email"
              className="inputSession"
              required
            />
          </div>

          <div className="input-box">
            <span onClick={() => setPasswordVisible(!passwordVisible)}>
              {" "}
              {passwordVisible ? (
                <i className="bx bxs-lock-open"></i>
              ) : (
                <i className="bx bxs-lock"></i>
              )}
            </span>
            <input
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type={passwordVisible ? "text" : "password"}
              placeholder="Your Password"
              className="inputSession"
              required
            />
          </div>

          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
            {currState === "Login" ? (
              <p>
                Create a new Account?{" "}
                <span onClick={() => setCurrState("Sign In")}>Click Here</span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span onClick={() => setCurrState("Login")}>Login Here</span>
              </p>
            )}
          </div>

          <button
            className="btn"
            onClick={(e) => {
              currState === "Login" ? login(e) : signup(e);
            }}
          >
            {currState === "Login" ? "Login" : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
