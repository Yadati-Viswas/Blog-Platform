import React from "react";
import { useState } from "react";
import validator from 'validator';
import './Components.css';
import {GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const LoginComponent = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        if(ValidateEmail(email)){
            if(validatePassword(password)){
                onLogin(email, password);
            }  
            else{
                PasswordError();
            }
        }
        else {
            EmailError();
        }
        
    };
    function ValidateEmail(e) {
        return validator.isEmail(email);
    }
    function validatePassword(e) {
        return !validator.isEmpty(password);
    }
    function EmailError() {
        
    }
    function PasswordError() {
        
    }
    function handleLoginSuccess(response) {
        console.log('Login successful', response);
    }
      
    function handleLoginFailure(error) {
        console.error('Login failed', error);
    }
    return (
        <div >
            <div className="container">
                <h2 className="login-field">Login</h2>
                <div >
                    <div>
                        <label className="text-fields">Email</label>
                        <input className="custom-fields" type="email" placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div>
                        <label className="text-fields">Password</label>
                        <input  className="custom-fields" type="password" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <div class="login-actions">
                        <a href="#" class="forgot-password">Forgot Password?</a>
                        <button class="login-btn" onClick={handleLogin}>Login</button>
                    </div>
                    <div>
                        <GoogleOAuthProvider clientId= "154254241755-arp52v962ul2uhejbt9i88grs9jbbn3f.apps.googleusercontent.com" >
                            <h1>Sign in with Google</h1>
                            <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginFailure} />
                        </GoogleOAuthProvider>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default LoginComponent;