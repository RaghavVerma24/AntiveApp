import React from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import signin from './image/svg-signin.svg'
import { Link } from "react-router-dom";


const Form = () => {
  return (
    <div className='SignupPage'>
      <div className='form-container'>        
        <div className='form-content-left'>
        <Link to='/'>
          <span className='logobtn' >Antive.</span>
        </Link>
        <p className='subtextone'>
          Online Student Management Tool
        </p>
          <img className='form-img' src={signin} alt='spaceship' />
          <span className='form-input-login'>
          Already have an account? Login <Link to='/login'>here</Link>
        </span>
        </div>
        <FormSignup />
      </div>
    </div>
  );
};

export default Form;