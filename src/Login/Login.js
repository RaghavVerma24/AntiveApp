import React, { useRef, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
//Styles
import "./Login.css";
//Context
import { useAuth } from "../Signin/context/AuthContext";
//Icons
import { FcGoogle } from "react-icons/fc";
//Firebase
import db, { provider, auth } from "../Signin/firebase";
//Popups
import { toastInfo } from "./toastInfo";
//Redux
import { useDispatch } from "react-redux";


export default function LoginFunction() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const width = window.screen.width;

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
    <div className="form-content-rightL">
      <form className="formL" onSubmit={handleSubmit} noValidate>
        <h1>Log In</h1>
        <p className="WelcomBackL">Welcome Back!</p>

        {error && <p className="errorL">{error}</p>}

        <div className="form-inputsL">
          <label className="form-labelL">Email</label>
          <input
            className="form-inputL"
            ref={emailRef}
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-inputsL">
          <label className="form-labelL">Password</label>
          <input
            className="form-inputL"
            ref={passwordRef}
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button disabled={loading} className="form-input-btnL" type="submit">
          Login
        </button>
        <div className="form-input-btn-googleL" onClick={signInGoogle}>
          <div className="googlebtntextL">Continue with Google</div>
        </div>
        <div className="forgotpassL">
          <Link to="/forgot-password" style={{ textDecoration: "none" }}>
            <p className="forgotpasstextL">Forgot Password?</p>
          </Link>
        </div>
      </form>
    </div>
  );
}
