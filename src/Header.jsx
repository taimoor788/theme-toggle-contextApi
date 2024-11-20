import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Consume theme from context

  return (
    <header style={{ padding: "20px", background: theme === "light" ? "#fff" : "#333" }}>
      <h1 style={{ color: theme === "light" ? "#000" : "#fff" }}>Theme Toggle Example</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
