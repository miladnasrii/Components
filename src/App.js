import React from "react";
import "./style.css";
import Hello from "./Hello";
import Timer from "./Tmier";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Hello />
        <Timer />
      </div>
    );
  }
}

export default App;