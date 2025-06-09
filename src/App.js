import React, { useState } from "react";
import Quiz from "./components/Quiz";
import "./App.css";
import { Sun, Moon } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* Top bar for theme toggle */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <Sun size={26} /> : <Moon size={26} />}
        </button>
      </div>

      {/* Centered Heading */}
      <h1 className="heading">Quiz App</h1>

      <Quiz />
    </div>
  );
}

export default App;
