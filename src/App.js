import React, { Component } from "react";
import MapComponent from "./components/MapComponent";
import NavBar from "./styles/NavBar";
import AddHotspotForm from './components/AddHotspotForm.jsx'

export class App extends Component {
  constructor(props){
    super(props);
    
  }
  render() {
    return (
      <div>
        <NavBar />
        <MapComponent/>
      </div>
    );
  }
}

export default App;
