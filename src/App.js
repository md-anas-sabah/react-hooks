import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import UseState from "./hooks/UseState";
import UseEffect from "./hooks/UseEffect";

function App() {
  return (
    <div className="app">
      <h1 className="header">
        React Hooks Introduction <img src="../react.svg" alt="" />
      </h1>

      <Router>
        <NavUnlisted>
          <Link to="/state">
            <button>useState Hook</button>
          </Link>
          <Link to="/effect">
            <button>useEffect Hook</button>
          </Link>
          <Link to="/state">
            <button>useState Hook</button>
          </Link>
          <Link to="/state">
            <button>useState Hook</button>
          </Link>
          <Link to="/state">
            <button>useState Hook</button>
          </Link>
          <Link to="/state">
            <button>useState Hook</button>
          </Link>
          <Link to="/state">
            <button>useState Hook</button>
          </Link>
        </NavUnlisted>
        <Routes>
          <Route path="/state" element={<UseState />} />
          <Route path="/effect" element={<UseEffect />} />
        </Routes>
      </Router>
      {/* <Last>@2022 Copyright:Md Anas Sabah</Last> */}
    </div>
  );
}

export default App;

const NavUnlisted = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  text-decoration: none;

  button {
    height: 4rem;
    width: 8rem;
    margin: 20px;
    padding: 5px;
    outline: none;
    border: none;
    border-radius: 20px;
    background-color: rgb(137, 137, 255);
    text-decoration: none;
    cursor: pointer;
    font-size: 15px;
  }
  button:hover {
    padding-bottom: 20px;
    border-bottom: 3px solid white;
  }
`;

// const Last = styled.p`
//   color: white;
//   margin-left: -77rem;
//   font-size: 12px;
//   position: absolute;
//   bottom: 6px;
// `;
