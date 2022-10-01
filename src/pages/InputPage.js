import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function InputPage() {
  const [isMember, setIsMember] = useState(true);
  return (
    <>
      {/* render SignIn or SignUp page based on condition */}
      {isMember ? (
        <SignIn setIsMember={setIsMember} isMember={isMember} />
      ) : (
        <SignUp setIsMember={setIsMember} isMember={isMember} />
      )}
    </>
  );
}
