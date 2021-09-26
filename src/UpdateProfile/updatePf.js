import React, { useRef, useState } from "react";
import "./updateprofile.css";
import { useAuth } from "../Signin/context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import db from "../Signin/firebase";

export default function UpdatePf() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const history = useHistory();
  const [name, setName] = useState("");

  function handleSubmit(e, docId) {
    e.preventDefault();
    
    if (currentUser.uid === "" ) {
      db
      .collection("NotGoogleUsers")
      .add({
        name: name,
        userId: currentUser.uid
      })
    } else {
      db
      .collection('NotGoogleUsers')
      .doc()
      .update({ 
        name: name,
      })
    }
    
    

    if (passwordRef.current.value !== password2Ref.current.value) {
      return setError("Please Confirm That Your Passwords Match");
    }

    if (emailRef.current.value === "") {
      return setError("Please Type In Your Credentials");
    }

    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/dashboard");
      })
      .catch(() => {
        setError("Failed To Update Account");
      })
      .finally(() => {
        setError("Account Updated!")
        setLoading(false);
      });

  }

  return (
    <div className="form-content-rightU">
      <form className="formU" onSubmit={handleSubmit}>
        <h1>Update Profile</h1>
        <p className="DontAccountU">Lets Change Your Profile!</p>

        {error && <p className="errorU">{error}</p>}

        <div className="form-inputsU">
          <label className="form-labelU">Want a username?</label>
          <input
            className="form-inputU"
            type="name"
            name="name"
            value={name}
            id='name'
            onChange={(e) => setName(e.target.value)}
            placeholder="Username... | or keep blank"
          />
        </div>
        <div className="form-inputsU">
          <label className="form-labelU">Email</label>
          <input
            className="form-inputU"
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Enter your email"
            defaultValue={currentUser.email}
            // required
          />
        </div>
        <div className="form-inputsU">
          <label className="form-labelU">Password</label>
          <input
            className="form-inputU"
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="Leave Blank To Keep It The Same"
          />
        </div>
        <div className="form-inputsU">
          <label className="form-labelU">Confirm Password</label>
          <input
            className="form-inputU"
            ref={password2Ref}
            type="password"
            name="password2"
            placeholder="Leave Blank To Keep It The Same"
          />
        </div>
        <button disabled={loading} className="form-input-btnU" type="submit">
          Update
        </button>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <p className="backtoDashboard">Cancel</p>
        </Link>
      </form>
    </div>
  );
}
