import React, { Component } from "react";
import MapComponent from "./components/MapComponent";
import NavBar from "./styles/NavBar";

export class getCurrentLocation extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentLat = null,
      currentLng = null,
    }
  }
  componentDidMount(){
      navigator.geolocation.watchPosition((position) => {
          this.setState({
            currentLat: position.coords.latitude,
            currentLng: position.coords.longitude
          })
          // ,
        });
        console.log(this.state.currentLat)
        this.loadMap();
  }
  render() {
    return (
      <div>
        <MapComponent currentLat = {this.state.currentLat} currentLng = {this.state.currentLng} />
      </div>
    );
  }
}

export default getCurrentLocation ;
