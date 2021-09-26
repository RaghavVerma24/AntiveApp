//React shit
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Context
import { useAuth } from "../Signin/context/AuthContext";

//Styles
import "./OfficialForgotPass.css";

//Images
import forgotpass from './image/forgotpass.svg'

function OfficialForgotPass() {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check Your Inbox For Further Updates!");
    } catch {
      setError("Failed To Reset Password");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="ForgotPassContainer">
        <div className="ForgotPassLeftContainer">
          <div className="OfficialForgotPassLogo"><Link to="/">Antive</Link></div>
          <img className="Officialform-imgF" src={forgotpass} alt="Forgot Password" />
          <div className="NeedAnAccount">
            Need an account?{" "}
            <Link to="/signup">
              <strong>Sign Up!</strong>
            </Link>
          </div>
        </div>
        <div className="ForgotPassRightContainer">
          <form
            className="OfficialForgotPassForm"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="OfficialForgotPassTitle">Forgot Password?</div>
            <div className="OfficialForgotPassTitleSubTitle">
              Lets get you your account back!
            </div>
            {error && <p className="OfficialerrorF">{error}</p>}

            <div className="Officialform-inputsF">
              <label className="Officialform-labelF">Email</label>
              <input
                className="Officialform-inputF"
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <button
              disabled={loading}
              className="Officialform-input-btnF"
              type="submit"
            >
              Reset Password
            </button>
            <div className="OfficialforgotpassF">
              <Link to="/login" style={{ textDecoration: "none" }}>
                <p className="OfficialforgotpasstextF">Log In?</p>
              </Link>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <p className="OfficialNeedAccounttextF">Sign Up?</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default OfficialForgotPass;
