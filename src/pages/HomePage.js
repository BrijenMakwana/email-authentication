import React, { useEffect, useState } from "react";
import { auth, signOut } from "../firebase/index";
import "./main.css";

export default function HomePage() {
  const [email, setEmail] = useState("");

  // check if any user logged in

  useEffect(() => {
    const user = auth.currentUser;

    if (user !== null) {
      user.providerData.forEach((profile) => {
        setEmail(profile.email);
      });
    }
  }, []);

  // log out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="home-container">
      <h1 className="user-email">{email}</h1>
      <button onClick={logOut} className="logout-button">
        Log Out
      </button>
    </div>
  );
}
