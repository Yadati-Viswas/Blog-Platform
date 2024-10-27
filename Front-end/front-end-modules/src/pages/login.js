import React from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import LoginComponent from "../components/LoginUserComponents";
import './login.css';
import Navbar from "./Navbar";


const Login = () => {
  const navigate = useNavigate();
  const handleUserLogin = async (email, password) => {
    console.log("User Login Info:", email, password);
    const loginData = {email,password};
    try {
      const response = await axios.post('http://localhost:8080/auth/login', loginData, { validateStatus: () => true });
      if (response.status === 200) {
        navigate('/Home'); 
      } else if (response.status === 400) {
        console.log("Invalid email or password"); 
      } else {
        console.log(`Unexpected response: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error:', error); 
    }
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
