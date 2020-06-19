import React, { Component } from "react";
import {
  Map,
  GoogleApiWrapper,
  Marker,
  InfoWindow,
} from "google-maps-react";
import mapStyle from "../mapFolder/mapStyle";
import * as hotSpotData from "../data/NYCHotspot.json";
import  icon  from '../accessories/images/wifi-pointer-before-selected.png';
import redPointer from '../accessories/images/red-pointer.png';

class MapComponent extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      markers: null,
      pointedLocation: null,
      selectedWifi: null,
      currentLocation: null,
      isLoaded: null,
      loadError: null,
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    }
  }
  //  const [markers, setMarkers] = React.useState([]);
  //   const [pointedLocation, setPointedLocation] = React.useState([]);
  //   const [selectedWifi, setSelectedWifi] = React.useState(null);
  //   const [currentLocation, setCurrentLocation] = React.useState(null);
  //   const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  // });
  

  mapContainerStyle = {
    width: "100vw",
    height: "70vh",
  };
  style = {
    styles: mapStyle,
    disableDefaultUI: true,
    zoomControl: true,
  };

  
  componentDidMount() {
  }
  

  

  render() {
  
  // if (this.state.loadError) return "Error";
  // if (!this.state.isLoaded) return "Loading Maps";

  navigator.geolocation.getCurrentPosition((position) => {
    const currentLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    this.setState(currentLocation);
  });

  const currentPosition = () => {
    return <div>
      {<InfoWindow 
            lat = {this.state.currentLocation.lat}
            lng = {this.state.currentLocation.lng}
            content = {'You are here!'} 
          />}
    </div>
  }
    return (
      <div>
        <Map
          google ={this.props.google}
          style={this.mapContainerStyle}
          styles= {mapStyle}
          zoom={14}
          disableDefaultUI= {true}
          zoomControl= {true}
          // options = {
          // this.style}
          // initialCenter={this.state.currentLocation}
          initialCenter={{ lat: 47.444, lng: -122.176}}
          // width = {window.width}
          // height = {window.height}
          // onLoad={() => {
          //   this.setState((current) => [...current, {}]);
          // }}
        //   onClick  = { (event) => {
        //     this.setState(current => [...current, {
        //       lat: event.latLng.lat(),
        //       lng: event.latLng.lng(),
        //     }])
        //     console.log(event)
        // }}
        >
{/*           
          {hotSpotData.default.map((hotSpot) => (
            <Marker
              key={hotSpot.OBJECTID}
              position={{ lat: hotSpot.Latitude, lng: hotSpot.Longitude }}
              icon={{ 
                url: icon,
                scaledSize: new window.google.maps.Size(60,60),
               }}
          onClick= { () => {
            this.setState(hotSpot);
          }
        }
          
          
            />
          ))}
          {this.state.currentLocation && (
            <div>
            <InfoWindow position = {{ lat: this.state.currentLocation.lat, lng: this.state.currentLocation.lng}}>
              <strong><h7>You are here!</h7></strong></InfoWindow>
            <Marker 
            position={{ lat: this.state.currentLocation.lat, lng: this.state.currentLocation.lng }}
            icon={{ 
              url: redPointer,
              scaledSize: new window.google.maps.Size(50,50),
             }}/>
             </div>
          )}
          {this.state.selectedWifi && (
            <InfoWindow
              position={{ lat: this.state.selectedWifi.Latitude, lng: this.state.selectedWifi.Longitude }}
              onCloseClick={() => {
                this.setState({currentLocation: null});
              }}
            >
              <div>
                <b><p>Wifi-Hotspot Info</p></b>
                <ul>
                  <li>SSID: {this.state.selectedWifi.SSID}</li>
                  <li>Provider: {this.state.selectedWifi.Provider}</li>
                  <li>Borough: {this.state.selectedWifi.City}</li>
                  <li>Wifi-Session: {this.state.selectedWifi.Type}</li>
                  <li>Location-Type: {this.state.selectedWifi.Location_T}</li>
                </ul>
              </div>
            </InfoWindow>
          )} */}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapComponent);

