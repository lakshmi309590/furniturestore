import React, { useContext, useEffect, useState } from "react";
import loginImage from "../assets/images/loginImage.png"
import "./signup.css"
import { myContext } from "../App";
import { useNavigate } from "react-router-dom";

function Signup(){

  const {user,setUser}=useContext(myContext)
  const navigate=useNavigate()
  const[formData,setFormData]=useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  const [isRegistered,setIsRegistered]= useState()
  useEffect(()=>{
    if(isRegistered){
      navigate("/login")
    }
  },[isRegistered,navigate])

  const [errors,setErrors]=useState({})
  function handleSubmit(e){
    e.preventDefault();
   if(validate()){
    const existinguser=user.find((u)=>u.email===formData.email)
    if(existinguser){
      setErrors({ email: "Email is already registered" })
    }else{
      setUser([...user, formData])
      setIsRegistered(true)
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
    }
  }
  }

  const validate=()=>{
    const newError={}
    if(!formData.username) newError.username="username is required"
    if(!formData.email) newError.email="email is required"
    if(!formData.password) newError.password="password is required"
    if(formData.password!==formData.confirmPassword) newError.confirmPassword="password dont match"
    setErrors(newError);
    return Object.keys(newError).length===0  
  }
    return(
        <div className="registration-container">
              <div className="image-container">
                <img src={loginImage} alt="login" className="background-image"/>
              </div>
              <div className="form-container">
      <h1>Register</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required value={formData.username} onChange={(e)=>setFormData((prevData)=>({
            ...prevData,
            username:e.target.value
          }))}/>
        </div>
        {errors.username && <p  className="error">{errors.username}</p>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required value={formData.email} onChange={(e)=>setFormData((prevData)=>({
            ...prevData,
            email:e.target.value
          }))}/>
        </div>
        {errors.email && <p  className="error">{errors.email}</p>}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required 
          value={formData.password} onChange={(e)=>setFormData((prevData)=>({
            ...prevData,
            password:e.target.value
          }))} />
        </div>
        {errors.password && <p  className="error">{errors.password}</p>}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required   value={formData.confirmPassword}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  confirmPassword: e.target.value,
                }))
              }/>
        </div>
        {errors.confirmPassword && <p  className="error">{errors.confirmPassword}</p>}
        <div className="button-container">
    <button onClick={handleSubmit}   type="submit">Register</button>
  </div>
      </form>
    </div>
        </div>
    )
}

export default Signup