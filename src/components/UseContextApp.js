import React, { createContext, useState } from "react";
import UseContext from "../hooks/UseContext";

export const ThemeContext = createContext();

function UseContextApp() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggle() {
    setDarkTheme((prevTheme) => !prevTheme);
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <div className="useContext">
        <button onClick={toggle}>Toggle Theme</button>
        <UseContext />
      </div>
    </ThemeContext.Provider>
  );
}

export default UseContextApp;
