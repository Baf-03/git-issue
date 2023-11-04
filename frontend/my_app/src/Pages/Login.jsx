import React, { useState } from 'react'
import './Signin.css'
import { FaBeer } from 'react-icons/fa';
import { FaFacebook} from 'react-icons/fa';
import { AiFillGoogleCircle} from 'react-icons/ai';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';



const Login = () => {
    let [email,setEmail]=useState("")
    let [password,setpassword]=useState("")
    const navigate = useNavigate('')

    const handlelogin=async(e)=>{
        e.preventDefault();
        console.log("loginHandler");
        try {
            // const user = await signInWithEmailAndPassword(auth, email, password);
            const objToSend = {
              email,
              password,
            };
      
            const response = await axios.post(`http://localhost:5000/api/login`, objToSend);
            if (response.data.status) {
              console.log("login hogaya");
              console.log(window.btoa(JSON.stringify(response.data.data)));
              const userEncrypt = window.btoa(JSON.stringify(response.data.data));
      
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("user", userEncrypt);
              navigate("/");
            } else {
              console.log();
           
            }
      
            // console.log("user", user);
            // localStorage.setItem("uid", user.user.uid);
            // navigate("/dashboard");
          } 
          catch (error) {
            console.log("error", error.message);
        
          }
    }
  return (
    <div className="w-[100%] flex justify-center items-center h-[70vh]">
	<div className="screen">
        
		<div className="screen__content">
			<form className="login" onSubmit={handlelogin}>
        <div className='text-black text-center text-[2rem] font-bold '>Login</div>
           
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" onChange={(e)=>setEmail(e.target.value)} placeholder="User name / Email"/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" onChange={(e)=>setpassword(e.target.value)} placeholder="Password"/>
				</div>
				<button className="button login__submit">
					<span className="button__text" type="submit">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div className="social-login">
				<h3>log in via</h3>
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

export default Login