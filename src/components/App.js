import React, { useState } from "react";
import "./../styles/App.css";
import LoginForm from "./LoginForm";
import WelcomeMessage from "./WelcomeMessage";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };
  return (
    <div>
      {isLoggedIn ? (
        <WelcomeMessage username={username} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
