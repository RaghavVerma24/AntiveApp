import React, { useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../Signin/context/AuthContext";
import "./OfficialSignup.css";
import signin from "./image/svg-signin.svg";

function OfficialSignup(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();
  const userNameRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== password2Ref.current.value) {
      return setError("Please Confirm That Your Passwords Match");
    }

    if (emailRef.current.value === "") {
      return setError("Please Type In Your Credentials");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      setError("Account Creation Was Unsuccessful");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="OfficialSignUpContainer">
        <div className="OfficialSignUpLeftContainer">
          <div className="OfficialSignUpLogo"><Link to="/">Antive</Link></div>
          <img className="OfficialSignUpform-imgS" src={signin} alt="Signup" />
          <div className="HaveAnAccount">
            Have an account?{" "}
            <Link to="/login">
              <strong>Log In</strong>
            </Link>
          </div>
        </div>

        <div className="OfficialSignUpRightContainer">
          <form
            className="OfficialSignUpForm"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="OfficialSignUpTitle">Sign Up</div>
            <div className="OfficialSignUpTitleSubTitle">
              Welcome to best student organizer!
            </div>
            {error && <p className="OfficialerrorS">{error}</p>}

            <div className="Officialform-inputsS">
              <label className="Officialform-labelS">Email</label>
              <input
                className="Officialform-inputS"
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="Officialform-inputsS">
              <label className="Officialform-labelS">Password</label>
              <input
                className="Officialform-inputS"
                ref={passwordRef}
                type="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="Officialform-inputsS">
              <label className="Officialform-labelS">Confirm Password</label>
              <input
                className="Officialform-inputS"
                ref={password2Ref}
                type="password"
                name="password2"
                placeholder="Confirm your password"
                required
              />
            </div>
            <button
              disabled={loading}
              className="Officialform-input-btnS"
              type="submit"
            >
              Sign Up
            </button>
            <div className="OfficialforgotpassS">
              <Link to="/forgot-password" style={{ textDecoration: "none" }}>
                <p className="OfficialforgotpasstextS">Forgot Password?</p>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <p className="OfficialNeedAccounttextS">Log In?</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default OfficialSignup;
