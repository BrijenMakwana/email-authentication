import React from "react";
import "./main.css";

export default function SignIn() {
  return (
    <div className="signin-container">
      <div className="input-container">
        <h1 className="heading">Sign In</h1>
        <input type="text" className="input-text" placeholder="Email" />
        <input type="password" className="input-text" placeholder="Password" />
        <input type="submit" value="Sign In" className="button" />
      </div>
    </div>
  );
}
