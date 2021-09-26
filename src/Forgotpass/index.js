import React from 'react';
import './forgotpass.css';
import ForgotPassword from './forgotpass';
import forgotpass from './image/forgotpass.svg'
import { Link} from "react-router-dom";

const ForgotPass = () => {
  return (
      <div className='loginPageF'>
        <div className='form-containerF'>        
          <div className='form-content-leftF'>
          <Link to='/'>
            <span className='logobtnF' >Antive.</span>
          </Link>
          <p className='subtextoneF'>
            Online Student Management Tool
          </p>
            <img className='form-imgF' src={forgotpass} alt='Forgot Pass?' />
            <span className='form-input-loginF'>
            Need an account? Signup <Link to='/signup'>here</Link>
          </span>
          </div>
          <ForgotPassword />
        </div>
      </div>
    
  );
};

export default ForgotPass;