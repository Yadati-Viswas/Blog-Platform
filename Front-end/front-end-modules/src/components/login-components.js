import React from "react";
import { useState } from "react";
import './login-components.css';

const LoginComponent = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = () => {
      onLogin(email, password);  
    };
    return (
        <div>
            <div>
                <h2 className="login-field">Login</h2>
                <div className="login-container">
                    <div>
                        <h3 className="text-fields">Email</h3>
                        <input className="custom-fields" type="email" placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <br/>
                    <div>
                    <h3 className="text-fields">Password</h3>
                        <input  className="custom-fields" type="password" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    </div>
                    <div class="login-actions">
                        <a href="#" class="forgot-password">Forgot Password?</a>
                        <button class="login-btn" onClick={handleLogin}>Login</button>
                    </div>
                </div>    
            </div>
        </div>
    );

};

export default LoginComponent;