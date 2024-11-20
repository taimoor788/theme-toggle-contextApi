import React, { useContext } from "react";
import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <ThemeProvider>
      <h2 style={{textAlign:'center', padding: "10px", fontSize:'48px' }}>Context Api</h2>
      <Header /> {/* Header contains the theme toggle */}
      <Main />   {/* Main content displays based on the current theme */}
    </ThemeProvider>
  );
}

export default App;
