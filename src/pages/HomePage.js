import React, { useEffect } from "react";
import { auth } from "../firebase/index";

export default function HomePage() {
  useEffect(() => {
    const user = auth.currentUser;

    if (user !== null) {
      user.providerData.forEach((profile) => {
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      });
    }
  }, []);

  return <div>HomePage</div>;
}
