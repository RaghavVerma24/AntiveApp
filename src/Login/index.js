import React from "react";
import "./Login.css";
import LoginFunction from "./Login";
import loginsvg from "./image/login.svg";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="loginPageL">
      <div className="form-containerL">
        <div className="form-content-leftL">
          <Link to="/">
            <span className="logobtnL">Antive.</span>
          </Link>
          <p className="subtextoneL">Online Student Management Tool</p>
          <img className="form-imgL" src={loginsvg} alt="login" />
          <span className="form-input-loginL">
            Need an account? Signup <Link to="/signup">here</Link>
          </span>
        </div>
        <LoginFunction />
      </div>
    </div>
  );
};

export default LoginForm;
