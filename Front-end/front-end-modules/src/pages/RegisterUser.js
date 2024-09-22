import { React } from "react";
import Navbar from './Navbar';
import './RegisterUser.css';
import { useNavigate } from "react-router-dom";
import RegisterUserComponents from "../components/RegisterUserComponents";

const RegisterUser = () => {
    const navigate = useNavigate();
    const handleSignUp = (firstname,lastname,username,email,mobilenumber,gender,password,confirmpassword) => {
        console.log(firstname,lastname,username,email,mobilenumber,gender,password,confirmpassword);
        navigate('/Home');
    };
    return (
        <div>
            <Navbar />
            <div className="signup-page">
                <RegisterUserComponents onSignUp={handleSignUp} />
            </div>
        </div>
    );
    
};

export default RegisterUser;