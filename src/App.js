import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Routes from "./Routes";

function App() {
  return (
    <main>
      <NavBar />
      <div className="container">
        <h1 className="mt-3">Welcome to the shopping cart!</h1>
        <Routes />
      </div>
    </main>
  );
}

export default App;
