import "./App.css";
import { useEffect, useState } from "react";
import SignIn from "./pages/SignIn";
import { auth, onAuthStateChanged } from "./firebase/index";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import InputPage from "./pages/InputPage";

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

  return <div className="App">{isUser ? <HomePage /> : <InputPage />}</div>;
}

export default App;
