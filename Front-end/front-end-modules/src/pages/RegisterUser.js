import { React} from "react";
import Navbar from './Navbar';
import axios from 'axios';
import './RegisterUser.css';
import { useNavigate } from "react-router-dom";
import RegisterUserComponents from "../components/RegisterUserComponents";

const RegisterUser = () => {
    const navigate = useNavigate();
    const handleSignUp = async (firstname,lastname,username,email,mobilenumber,gender,password,confirmpassword) => {
        console.log(firstname,lastname,username,email,mobilenumber,gender,password,confirmpassword);
        const userData = {firstname,lastname,username,email,mobilenumber,gender,password,confirmpassword};

        try{
            const response = await axios.post('http://localhost:8080/user/save', userData)
            .then(response => {
            if (response.status === 201) {
                navigate('/Home');
            }
            else {
                console.error('Error saving user:', response.statusText);
            }
            }) 
        }
            catch (error) {
            console.error('Error:', error);
            }
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