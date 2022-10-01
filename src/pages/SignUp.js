import React, { useState } from "react";
import "./main.css";

import {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "../firebase/index";

export default function SignUp({ setIsMember, isMember }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // sign up
  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        sendEmailVerification(auth.currentUser).then(() => {
          // Email verification sent!
          // ...
          alert("email sent");
        });
        signOut(auth)
          .then(() => {
            // Sign-out successful.
          })
          .catch((error) => {
            // An error happened.
          });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };
  return (
    <div className="main-container">
      <div className="input-container">
        <h1 className="heading">Sign Up</h1>

        {/* email */}
        <input
          type="email"
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

        {/* sign up */}
        <input
          type="submit"
          value="Sign Up"
          className="button"
          onClick={signUp}
        />

        {/* back to sign in page */}
        <span className="not-member" onClick={() => setIsMember(true)}>
          Back to Sign In
        </span>
      </div>
    </div>
  );
}
