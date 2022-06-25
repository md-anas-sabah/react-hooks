import React, { useContext } from "react";
import "./useContext.css";
import { ThemeContext } from "../components/UseContextApp";

function UseContext() {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    height: "50vh",
    width: "60vw",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <div style={themeStyles} className="useContext">
      Use Context <br></br> <br></br> Source Code: <br></br>{" "}
      <a href="https://github.com/md-anas-sabah/react-hooks/blob/main/src/components/UseContextApp.js">
        <button>UseContextApp</button>
      </a>{" "}
      /{" "}
      <a href="https://github.com/md-anas-sabah/react-hooks/blob/main/src/hooks/UseContext.js">
        <button>useContext</button>
      </a>
    </div>
  );
}

export default UseContext;
