import React from "react";
import LoginComponent from "../components/LoginUserComponents";
import './login.css';
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleUserLogin = (email, password) => {
    console.log("User Login Info:", email, password);
    navigate('/Home');
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
