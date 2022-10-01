import React, { useState } from "react";
import "./main.css";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  provider,
  GithubAuthProvider,
  gitProvider,
  signOut,
  sendPasswordResetEmail,
} from "../firebase/index";

export default function SignIn({ setIsMember, isMember }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // sign in
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // only verified user can login
        if (!user.emailVerified) {
          alert("Please verify your email in order to login");
          signOut(auth)
            .then(() => {
              // Sign-out successful.
            })
            .catch((error) => {
              // An error happened.
            });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  // sign in with google
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  // sign in with github
  const signInWithGitHub = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };

  // password reset
  const forgetPassword = () => {
    if (!email) {
      alert("Please enter your email");
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          // Password reset email sent!
          // ..
          alert("Link to reset the password has been sent to  your email id");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          alert(errorMessage);
        });
    }
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
        {/* forget password */}
        <span className="not-member" onClick={forgetPassword}>
          Forget password
        </span>

        {/* sign in */}
        <input
          type="submit"
          value="Sign In"
          className="button"
          onClick={signIn}
        />

        {/* sign in with different providers */}
        <div className="icon-button-container">
          <div type="submit" className="icon-button" onClick={signInWithGoogle}>
            Sign in with <AiFillGoogleCircle color="#000" size="25px" />
          </div>
          <div type="submit" className="icon-button" onClick={signInWithGitHub}>
            Sign in with <AiFillGithub color="#000" size="25px" />
          </div>
        </div>

        {/* sign up page */}
        <span className="not-member" onClick={() => setIsMember(false)}>
          Not a member?
        </span>
      </div>
    </div>
  );
}
