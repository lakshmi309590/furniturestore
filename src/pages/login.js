import React, { useContext, useState } from "react";
import loginImage from "../assets/images/loginImage.png"
import "./signup.css"
import { myContext } from "../App";
import { useNavigate } from "react-router-dom";
function Login(){

    const {user}= useContext(myContext)
    const [formData,setFormData]=useState({email:"",password:""})
    const [errors,setErrors]=useState({})
    const navigate= useNavigate()
    const handleEmailChange=(e)=>{
        setFormData((prevData)=>({
            ...prevData,email:e.target.value,
        }))
    }
    const handlePasswordChange=(e)=>{
        setFormData((prevData)=>({
            ...prevData,
            password:e.target.value
        }))
    }
    function handlesubmit(e){
        e.preventDefault();
        const  existinguser= user.find((u)=>u.email===formData.email&& u.password===formData.password)
     if(existinguser){
        navigate("/home")
     }else{
        setErrors({ message:"Invalid email or password" })
     }
    }

    return(
        <div className="registration-container">
           <div className="image-container">
             <img src={loginImage} alt="login" className="background-image"/>
            </div>
       <div className="form-container">
           <h1>Login</h1>
           <form>
              <div className="form-group">
                 <label htmlFor="username">Email:</label>
                 <input placeholder="enter your name" value={formData.email}
              onChange={handleEmailChange}/>
              </div>
              <div className="form-group">
                 <label htmlFor="username">Password:</label>
                 <input placeholder="enter your password" value={formData.password} onChange={handlePasswordChange}/>
              </div>
              {errors.message && <p className="error">{errors.message}</p>}
              <button onClick={handlesubmit}>login</button>
            </form>
            </div>
        </div>
    )
}

export default Login