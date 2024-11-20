import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Main() {
  const { theme } = useContext(ThemeContext); // Consume theme from context

  return (
    <main
      style={{
        padding: "20px",
        background: theme === "light" ? "#f0f0f0" : "#222",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h2>{theme === "light" ? "Light Mode" : "Dark Mode"}</h2>
      <p>
        This is a {theme} mode example. You can change the theme by using the button in the header.
      </p>
    </main>
  );
}

export default Main;
