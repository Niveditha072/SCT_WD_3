import React, { useState } from "react";
import Quiz from "./components/Quiz";
import "./App.css";
import { Sun, Moon } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <button className="theme-toggle" onClick={toggleTheme}>
         {darkMode ? <Sun size={24} /> : <Moon size={24} />}
     </button>
      <Quiz />
    </div>
  );
}

export default App;
