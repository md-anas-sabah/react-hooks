
  import React, { useState, useMemo } from "react";

  function MemoCap() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
      return slowFunction(number);
    }, [number]);

    const themeStyle = {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
      fontSize: "27px",
      width: "10rem",
      height: "3rem",
      justifyContent: "center",
    };

    return (
      <div className="useMemo">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Change Theme
        </button>
        <div style={themeStyle}>{doubleNumber}</div>
      </div>
    );
  }
  function slowFunction(number) {
    console.log("Calling slow function");
    for (let i = 0; i < 1000000000; i++) {}
    return number * 2;
  }

  export default MemoCap;
