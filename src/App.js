import React, { Component } from "react";
import MapComponent from "./components/MapComponent";
import NavBar from "./styles/NavBar";
import AddHotspotForm from './components/AddHotspotForm'
export class App extends Component {
  constructor(props){
    super(props);
    
  }
  render() {
    // console.log(this.props.formDisplay)
    // let displayForm = true ;
    return (
      <div>
        <NavBar />
        <MapComponent/>
      
        
      </div>
    );
  }
}

export default App;
