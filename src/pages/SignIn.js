import React, { useState } from "react";
import "./main.css";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import { auth, signInWithEmailAndPassword } from "../firebase/index";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="signin-container">
      <div className="input-container">
        <h1 className="heading">Sign In</h1>
        {/* email */}
        <input
          type="text"
          className="input-text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* password */}
        <input
          type="password"
          className="input-text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          value="Sign In"
          className="button"
          onClick={signIn}
        />
        <div className="icon-button-container">
          <div type="submit" className="icon-button">
            Sign in with <AiFillGoogleCircle color="#000" size="25px" />
          </div>
          <div type="submit" className="icon-button">
            Sign in with <AiFillGithub color="#000" size="25px" />
          </div>
        </div>

        <span className="not-member">Not a member?</span>
      </div>
    </div>
  );
}
