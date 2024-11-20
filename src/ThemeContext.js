import { createContext, useState } from "react";

// Create a context for the theme
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Manage the theme with useState
  const [theme, setTheme] = useState("light");

  // Toggle between light and dark theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
