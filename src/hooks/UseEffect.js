import React from "react";
import "./UseEffect.css";
import { useState, useEffect } from "react";

function UseEffect() {
  const [resourceType, setResourceType] = useState("Posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <div className="useEffect">
      <button onClick={() => setResourceType("Posts")}>Posts</button>
      <button onClick={() => setResourceType("Users")}>Users</button>
      <button onClick={() => setResourceType("Comments")}>Comments</button>
      <h1>{resourceType}</h1>
      <div className="textarea">
        {items.map((item) => {
          return <pre>{JSON.stringify(item)}</pre>;
        })}
      </div>

      <div className="implementation">
        <div className="implementation_header">
          The <span className="effect"> Effect Hook </span> lets you perform
          side effects in function components:
        </div>
        <img src="../useEffect.jpg" alt="" className="code" />
      </div>
    </div>
  );
}

export default UseEffect;
