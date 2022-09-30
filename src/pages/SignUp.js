import React, { useState } from "react";
import "./main.css";

import { auth, createUserWithEmailAndPassword } from "../firebase/index";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="main-container">
      <div className="input-container">
        <h1 className="heading">Sign Up</h1>

        <input
          type="email"
          className="input-text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input-text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          value="Sign Up"
          className="button"
          onClick={signUp}
        />
      </div>
    </div>
  );
}
