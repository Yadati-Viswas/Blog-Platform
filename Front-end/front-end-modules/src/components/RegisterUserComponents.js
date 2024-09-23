import { React, useState } from "react";
import './Components.css';
import validator from "validator";

const RegisterUserComponents = ({ onSignUp }) => {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDOB] = useState('');

    const [errors, setErrors] = useState({});

    const validateFormFields = () => {
        let formErrors = {};

        if (validator.isEmpty(firstname)) {
            formErrors.firstname = "First name is required";
        } else if (!validator.isAlpha(firstname)) {
            formErrors.firstname = "First name should only contain letters";
        }

        if (validator.isEmpty(lastname)) {
            formErrors.lastname = "Last name is required";
        } else if (!validator.isAlpha(lastname)) {
            formErrors.lastname = "Last name should only contain letters";
        }

        if (validator.isEmpty(username)) {
            formErrors.username = "Username is required";
        }

        if (!validator.isEmail(email)) {
            formErrors.email = "Invalid email address";
        }

        if (!validator.isMobilePhone(mobilenumber, 'any')) {
            formErrors.mobilenumber = "Invalid mobile number";
        }

        if (validator.isEmpty(gender)) {
            formErrors.gender = "Gender is required";
        }

        if (validator.isEmpty(password)) {
            formErrors.password = "Password is required";
        } else if (!validator.isLength(password, { min: 6 })) {
            formErrors.password = "Password must be at least 6 characters";
        }

        if (password !== confirmpassword) {
            formErrors.confirmpassword = "Passwords do not match";
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSignUp = () => {
        if (validateFormFields()) {
            onSignUp(firstname, lastname, username, email, mobilenumber, gender, password, confirmpassword);
        }
    };

    return (
        <div className="container signup-container">
            <form>
                <div className="text-fields">
                    Sign Up for New User
                </div>
                <div className="field-container row-container">
                    <div>
                        <label className="text-fields">First Name</label>
                        <input className="custom-fields" type="text" placeholder="FirstName" value={firstname}
                            onChange={(e) => setFirstName(e.target.value)} />
                        {errors.firstname && <div className="error">{errors.firstname}</div>}
                    </div>
                    <div>
                        <label className="text-fields">Last Name</label>
                        <input className="custom-fields" type="text" placeholder="LastName" value={lastname}
                            onChange={(e) => setLastName(e.target.value)} />
                        {errors.lastname && <div className="error">{errors.lastname}</div>}
                    </div>
                </div>
                <div className="field-container">
                    <div>
                        <label className="text-fields">User Name</label>
                        <input className="custom-fields" type="text" placeholder="UserName" value={username}
                            onChange={(e) => setUserName(e.target.value)} />
                        {errors.username && <div className="error">{errors.username}</div>}
                    </div>
                    <div>
                        <label className="text-fields">Email</label>
                        <input className="custom-fields" type="email" placeholder="Email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>
                </div>
                <div className="field-container">
                    <div>
                        <label className="text-fields">Mobile Number</label>
                        <input className="custom-fields" type="text" placeholder="Enter Mobile Number" value={mobilenumber}
                            onChange={(e) => setMobileNumber(e.target.value)} />
                        {errors.mobilenumber && <div className="error">{errors.mobilenumber}</div>}
                    </div>
                    <div>
                        <label className="text-fields gender-field">Gender</label>
                        <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        {errors.gender && <div className="error">{errors.gender}</div>}
                    </div>
                </div>
                <div className="field-container">
                    <div>
                        <label className="text-fields">Password</label>
                        <input className="custom-fields" type="password" placeholder="Password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        {errors.password && <div className="error">{errors.password}</div>}
                    </div>
                    <div>
                        <label className="text-fields">Confirm Password</label>
                        <input className="custom-fields" type="password" placeholder="Confirm Password" value={confirmpassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} />
                        {errors.confirmpassword && <div className="error">{errors.confirmpassword}</div>}
                    </div>
                </div>
            </form>
            <div className="signup-btn">
                <button className="login-btn" onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
    );
};

export default RegisterUserComponents;
