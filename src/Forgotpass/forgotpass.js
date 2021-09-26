import React, { useRef, useState, useEffect } from "react";
import "./forgotpass.css";
import { useAuth } from "../Signin/context/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
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
    <div className="form-content-rightF">
      <form className="formF" onSubmit={handleSubmit} noValidate>
        <h1>Forgot Password?</h1>
        <p className="WelcomBackF">Lets Get You Your Account Back!</p>

        {error && <p className="error1">{error}</p>}
        {message && <p className="error1">{message}</p>}

        <div className="form-inputsF">
          <label className="form-labelF">Email</label>
          <input
            className="form-inputF"
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <button disabled={loading} className="form-input-btnF" type="submit">
          Reset Password
        </button>
      </form>
    </div>
  );
}
