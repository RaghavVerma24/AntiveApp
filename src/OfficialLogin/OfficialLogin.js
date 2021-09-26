import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Signin/context/AuthContext";
import "./OfficialLoginElements.css";
import db, { provider, auth, firebaseApp } from "../Signin/firebase";
import { toastInfo } from "./toastInfo";
import loginsvg from "./image/login.svg";

function OfficialLogin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function signInGoogle(e) {
    e.preventDefault();
    const google = "google";
    setLoading(true);

    auth
      .signInWithPopup(provider)
      .then((auth) => {
        history.push("/dashboard");
      })
      .catch((error) => toastInfo(`${error}`, google, "top-center"));

    setLoading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value).then(
        () => {
          setEmail("");
          setPassword("");
        }
      );
      history.push("/dashboard");
    } catch {
      setError("Failed To Log In");
    }

    setLoading(false);
  }
  return (
    <>
      <div className="OfficialLoginContainer">
        <div className="OfficialLoginLeftContainer">
          <div className="OfficialLoginLogo">
            <Link to="/">Antive</Link>
          </div>
          <img className="Officialform-imgL" src={loginsvg} alt="login" />
          <div className="NeedAndAccount">
            Need an account?{" "}
            <Link to="/signup">
              <strong>Sign Up!</strong>
            </Link>
          </div>
        </div>
        <div className="OfficialLoginRightContainer">
          <form
            className="OfficialLoginForm"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="OfficialLoginTitle">Log In</div>
            <div className="OfficialLoginTitleSubTitle">Welcome Back!</div>
            {error && <p className="OfficialerrorL">{error}</p>}

            <div className="Officialform-inputsL">
              <label className="Officialform-labelL">Email</label>
              <input
                className="Officialform-inputL"
                ref={emailRef}
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="Officialform-inputsL">
              <label className="Officialform-labelL">Password</label>
              <input
                className="Officialform-inputL"
                ref={passwordRef}
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <button
              disabled={loading}
              className="Officialform-input-btnL"
              type="submit"
            >
              Login
            </button>
            <div
              className="Officialform-input-btn-googleL"
              onClick={signInGoogle}
            >
              <div className="OfficialgooglebtntextL">Continue with Google</div>
            </div>
            <div className="OfficialforgotpassL">
              <Link to="/forgot-password" style={{ textDecoration: "none" }}>
                <p className="OfficialforgotpasstextL">Forgot Password?</p>
              </Link>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <p className="OfficialNeedAccounttextL">Sign Up?</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default OfficialLogin;
