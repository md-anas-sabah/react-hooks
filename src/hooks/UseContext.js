import React, { useContext } from "react";
import { ThemeContext } from "../components/UseContextApp";

function UseContext() {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    height: "40vh",
    width: "60vw",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <div style={themeStyles}>
      Use Context <br></br> <br></br> Source Code: <br></br> <a href="./">UseContextApp</a>{" "}
      / <a href="./">useContext</a>
    </div>
  );
}

export default UseContext;
