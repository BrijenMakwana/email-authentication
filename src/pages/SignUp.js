import React from "react";
import "./main.css";

export default function SignUp() {
  return (
    <div className="main-container">
      <div className="input-container">
        <h1 className="heading">Sign Up</h1>
        <input type="text" className="input-text" placeholder="First Name" />
        <input type="text" className="input-text" placeholder="Last Name" />
        <input type="email" className="input-text" placeholder="Email" />
        <input type="password" className="input-text" placeholder="Password" />
        <input type="submit" value="Sign Up" className="button" />
      </div>
    </div>
  );
}
