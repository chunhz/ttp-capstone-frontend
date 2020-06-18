import React, { Component } from "react";
import MapComponent from "./components/MapComponent";
import NavBar from "./styles/NavBar";

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MapComponent />
      </div>
    );
  }
}

export default App;
