import { React, useState } from "react";
import './Components.css';

const RegisterUserComponents = ({onSignUp}) => {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDOB] = useState('');
    const handleSignUp = () => {
        onSignUp(firstname,lastname,username,email,mobilenumber,gender,password,confirmpassword);
    }
    return (
        <div className="container signup-container">
            <form>
                <div className="text-fields">
                    Sign Up for New User
                </div>
                <div className="field-container row-container">
                    <div>
                        <label className="text-fields">FirstName</label>
                        <input className="custom-fields" type="text" placeholder="FirstName" value={firstname}
                            onChange={(e) => setFirstName(e.target.value)} required/>
                    </div>
                    <div>
                        <label className="text-fields">LastName</label>
                        <input className="custom-fields" type="text" placeholder="LastName" value={lastname}
                            onChange={(e) => setLastName(e.target.value)} required/>
                    </div>
                </div>
                <div className="field-container">
                    <div>
                        <label className="text-fields">UserName</label>
                        <input className="custom-fields" type="text" placeholder="UserName" value={username}
                            onChange={(e) => setUserName(e.target.value)} required/>
                    </div>
                    <div>
                        <label className="text-fields">Email</label>
                        <input className="custom-fields" type="email" placeholder="Email" value={email}
                            onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                </div>
                <div className="field-container">
                    <div>
                        <label className="text-fields">Mobile Number</label>
                        <input className="custom-fields" type="number" placeholder="Enter Mobile Number" value={mobilenumber}
                            onChange={(e) => setMobileNumber(e.target.value)} required/>
                    </div>
                    <div>
                        <label className="text-fields gender-field">Gender</label>
                        <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>
                <div className="field-container">
                    <div>
                        <label className="text-fields">Password</label>
                        <input className="custom-fields" type="text" placeholder="Password" value={password}
                            onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <div>
                        <label className="text-fields">ConfirmPassword</label>
                        <input className="custom-fields" type="text" placeholder="Confirm Password" value={confirmpassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} required/>
                    </div>
                </div>
                {/*<div className="field-container">
                    <div>
                        <label className="text-fields">Password</label>
                        <input className="custom-fields" type="text" placeholder="Password" value={password}
                            onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <div>
                        <label className="text-fields">ConfirmPassword</label>
                        <input className="custom-fields" type="text" placeholder="Confirm Password" value={confirmpassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} required/>
                    </div>
                </div>*/}
            </form>
            <div className="signup-btn">
                <button className="login-btn" onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
    );
};

export default RegisterUserComponents;