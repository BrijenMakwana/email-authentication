import React, { useEffect, useState } from "react";
import { auth, signOut } from "../firebase/index";

export default function HomePage() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = auth.currentUser;

    if (user !== null) {
      user.providerData.forEach((profile) => {
        setEmail(profile.email);
      });
    }
  }, []);

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
    <div>
      {email}
      <button onClick={logOut}>Log Out</button>
    </div>
  );
}
