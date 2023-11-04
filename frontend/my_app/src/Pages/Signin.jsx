import './Signin.css'
import React, { useState } from 'react'
import { FaBeer } from 'react-icons/fa';
import { FaFacebook} from 'react-icons/fa';
import { AiFillGoogleCircle} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  
    const navigate = useNavigate();
  
    const SignupHandler = async (e) => {
      e.preventDefault();
      console.log("loginHandler");
      try {
        if (
        
          !email ||
          !password
        ) {
          alert("required field are missing");
          return;
        }
        console.log("signup function");
        const objToSend = {
          email,
          password,
        };
  
        const response = await axios.post('http://localhost:5000/api/signup', objToSend);
        console.log("response", response);
        if (response.data.status) {
          navigate("/login");
          alert(response.data.message);
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.log("error", error.message);
        alert("error", error.message);
      }
    };
  return (
    <div className="w-[100%] flex justify-center items-center h-[70vh]">
	<div className="screen">
        
		<div className="screen__content">
			<form className="login" onSubmit={SignupHandler}>
        <div className='text-black text-center text-[2rem] font-bold ' >SIGN UP</div>
           
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" onChange={(e)=>setEmail(e.target.value)} placeholder="User name / Email"/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" onChange={(e)=>setPassword(e.target.value)}  placeholder="Password"/>
				</div>
				<button className="button login__submit" >
					<span className="button__text" type="submit">Sign up Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div className="social-login">
				<h3>Signup via</h3>
				<div className="social-icons gap-2 text-[2rem]">
					<div><FaFacebook/></div>
					<div><AiFillGoogleCircle/></div>
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
  )
}

export default Signin
