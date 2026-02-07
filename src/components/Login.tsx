import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
    const navigate = useNavigate();
    //TODO: add .css styling and functionality
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate('/dashboard');
    }
  return (
    <>
        <form action="" className='form'>
            <h4>Login Component</h4>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
            <br />
            <button onClick={handleSubmit}>Login</button>
        </form>
    </>
  )
}

export default Login