import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../features/authSlice";



function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password  || !formData.email){
      alert("Please enter the required Fields");
    }else{
      console.log(formData);
      dispatch(signUp(formData));
      navigate("/login");
    }
 
  };

  return (
    <>
      <div className="conatinerSign">
        <h2> SignUp</h2>
        <form className="signForm" onSubmit={handleLogin}> 
          <input className="inputSign"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
          />
          <br />
          <input className="inputSign"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
           />
          <br />
          <input  className="inputSign"
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange}  
              placeholder="Password" 
              />
          <br/>
          <button type="submit">Sign Up</button>
       
        </form>
        
      </div>
    </>
  );
}

export default Signin;
