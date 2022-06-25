// Context provides a way to pass data or state through the component tree without having to pass props down manually through each nested component. It is designed to share data that can be considered as global data for a tree of React components, such as the current authenticated user or theme(e.g. color, paddings, margins, font-sizes).

// Context API uses Context. Provider and Context. Consumer Components pass down the data but it is very cumbersome to write the long functional code to use this Context API. So useContext hook helps to make the code more readable, less verbose and removes the need to introduce Consumer Component. The useContext hook is the new addition in React 16.8.

// Syntax:
// const authContext = useContext(initial Value)
// const authContext = useContext(initialValue);
// The useContext accepts the value provided by React.createContext and then re-render the component whenever its value changes but you can still optimize its performance by using memorization.

// Example: Program to demonstrate the use of useContext Hook. In this example, we have a button, whenever we click on the button the onClick handler is getting triggered and it changes the authentication status(with a default value to Nodes) with the help of the useContext hook

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
