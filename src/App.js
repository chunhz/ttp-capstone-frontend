import React, { Component } from "react";
import MapComponent from "./components/MapComponent";
import NavBar from "./styles/NavBar";
import NYCHotSpotAPI from "./data/NYCHotSpotAPI";

export class App extends Component {
  render() {
    return (
      <div>
        <NYCHotSpotAPI />
        <NavBar />
        <MapComponent />
      </div>
    );
  }
}

export default App;
