import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigation = useNavigate();

  const onLogin = () => {
    login('David Caceres Strieder');
    navigation('/', {
      replace: true
    })

  }

  return (    
    <div className='container mt-5'>
      <h1> Login </h1>
      <hr />
      <button 
        className='btn btn-primary'
        onClick={ onLogin }
      >
        Login
      </button>
    </div>
    
  )
}
