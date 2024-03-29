import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../features/authSlice';


function Login() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password :''
  })

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Dispatch loginUser action with formData
      await dispatch(loginUser(formData));
      // Redirect to '/home' if login successful
      navigate('/home');
    } catch (error) {
      // Handle errors if any
      console.error('Login failed:', error);
      // You may set some state to display error message to the user
    }
    // navigate("/login")
  }
  return (
    <>

    <div className='containerLogin'>
      <h2>Log In</h2>
      <form className='loginForm' onSubmit={handleLogin}>
        <input 
        className='loginInput'
            type="email"
            name='email'
            placeholder='Email Address'
            value={formData.email}
            onChange={handleChange}
            required

        />
        <br/>
        <input  className='loginInput'
            type="password" 
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
            
            />
        <button className='loginBtn' >Login</button>
      </form>
    </div>
    


</>

)
}

export default Login