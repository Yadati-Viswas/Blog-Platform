import React from "react";
import LoginComponent from "../components/login-components";
import './login.css';
import Navbar from "./Navbar";

const Login = () => {
  const handleUserLogin = (email, password) => {
    console.log("User Login Info:", email, password);
  };

  return (
        <div>
        <Navbar/>
        <div className="login-page">
          <LoginComponent onLogin={handleUserLogin} />
        </div>
        </div>
  );
};

export default Login;
