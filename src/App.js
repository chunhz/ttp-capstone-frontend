<<<<<<< HEAD
import React from "react";
import "./App.css";

function App() {
  return <div className="App">hello world</div>;
=======
import React, { Component } from "react";
import MapComponent from "./components/MapComponent";

export class App extends Component {
  render() {
    return (
      <div>
        <MapComponent />
      </div>
    );
  }
>>>>>>> DisplayMap
}

export default App;
