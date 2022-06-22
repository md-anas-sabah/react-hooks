import React, { useState } from "react";
import "./useState.css";

function UseState() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  }
  function increment() {
    setCount((nextCount) => nextCount + 1);
    setCount((nextCount) => nextCount + 1);
  }

  return (
    <div className="app">
      <div className="left">
        <button onClick={() => setCount(count - 1)}>Decrement by 1</button>
        <button onClick={decrement}>Decrement by 2</button>
      </div>
      <h1>{count}</h1>
      <div className="right">
        <button onClick={() => setCount(count + 1)}>Increment by 1</button>
        <button onClick={increment}>Increment by 2</button>
      </div>
      <p>Count set to: {count}</p>
      <div className="app_intro">
        <span>
          The useState() is a Hook that allows you to have state variables in
          functional components . so basically useState is the ability to
          encapsulate local state in a functional component. React has two types
          of components, one is class components which are ES6 classes that
          extend from React and the other is functional components. Class
          components a Component and can have state and lifecycle methods: class
          Message extends React. The useState hook is a special function that
          takes the initial state as an argument and returns an array of two
          entries. UseState encapsulate only singular value from the state, for
          multiple state need to have useState calls.
        </span>
      </div>

      <div className="implementation">
        <div className="implementation_header">
          Now look through the code for more understanding:
        </div>
        <img src="../useState.jpg" alt="" className="code" />
      </div>
    </div>
  );
}

export default UseState;
