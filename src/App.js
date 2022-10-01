import "./App.css";
import { useEffect, useState } from "react";
import SignIn from "./pages/SignIn";
import { auth, onAuthStateChanged } from "./firebase/index";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";

function App() {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setIsUser(true);
      } else {
        setIsUser(false);
      }
    });
  }, []);

  return <div className="App">{isUser ? <HomePage /> : <SignIn />}</div>;
}

export default App;
