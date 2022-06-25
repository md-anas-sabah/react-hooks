import React, { useState, useMemo } from "react";
import "./UseMemo.css";

function UseMemo() {
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

      <div className="intro">
        <h4>
          The <l>useMemo</l> is a hook used in the functional component of
          react that returns a memoized value. In Computer Science, memoization
          is a concept used in general when we don’t need to recompute the
          function with a given argument for the next time as it returns the
          cached result. A memoized function remembers the results of output for
          a given set of inputs. For example, if there is a function to add two
          numbers, and we give the parameter as 1 and 2 for the first time the
          function will add these two numbers and return 3, but if the same
          inputs come again then we will return the cached value i.e 3 and not
          compute with the add function again. In react also, we use this
          concept, whenever in the React component, the state and props do not
          change the component and the component does not re-render, it shows
          the same output. The useMemo hook is used to improve performance in
          our React application.
        </h4>

        <img src="../useMemo1.jpg" alt="pic" />
        <img src="../useMemo2.jpg" alt="pic" />
      </div>
    </div>
  );
}
function slowFunction(number) {
  console.log("Calling slow function");
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2;
}

export default UseMemo;
