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
import '../styles/mapStyle.css'
import redPointer from '../accessories/images/red-pointer.png';
import ListComponent from './ListComponent'
class MapComponent extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      markers: null,
      pointedLocation: null,
      selectedWifi: false,
      currentLocation: null,
      defaultLocation: {
        lat: 40.7128,
        lng: -74.0060,
      },
      showInfoWindow: false,
      showHello: true,
      isLocated: false,
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
    height: "51vh",
  };

  
  componentDidMount() {
    navigator.geolocation.watchPosition((position) => {
        this.setState({
          defaultLocation: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          },
          isLocated: true,
        })
      });
  }
  

  render() {
    return (
      <div>
        <Map className = "map"
          google={this.props.google}
          style={this.mapContainerStyle}
          styles= {mapStyle}
          zoom={14}
          disableDefaultUI= {true}
          zoomControl= {true}
          streetViewControl={true}
          initialCenter={{lat: this.state.defaultLocation.lat, lng: this.state.defaultLocation.lng } }
 
          onClick  = { (event) => {
            // this.setState(current => [...current, {
            //   lat: event.latLng.lat(),
            //   lng: event.latLng.lng(),
            // }])
            // this.setState({ selectedWifi: true})
        }}
        >
       
          {hotSpotData.default.map((hotSpot) => (
            <Marker
              key={hotSpot.OBJECTID}
              position={{ lat: hotSpot.Latitude, lng: hotSpot.Longitude }}
              icon={{ 
                url: icon,
                scaledSize: new window.google.maps.Size(60,60),
               }}
            onClick= { () => {
            this.setState({selectedWifi: hotSpot, showInfoWindow: true});
          }
          
        }
            />
          ))}
          {this.state.isLocated && (
            <InfoWindow
              visible = {this.state.showHello}
              position={{ lat: this.state.defaultLocation.lat, lng: this.state.defaultLocation.lng }}
              icon = {{}}
              onClose={() => {
                this.setState({showHello: false});
              }}
              
            >
            <b><p>Hello! You're here!</p></b>
            </InfoWindow>
          )}
            <InfoWindow
              visible = {this.state.showInfoWindow}
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
          {/* )} */}
          {
            <Marker
            position={{ lat: this.state.defaultLocation.lat, lng: this.state.defaultLocation.lng }}
            icon={{ 
              url: redPointer,
              scaledSize: new window.google.maps.Size(50,50),
             }}
            /> 
          }
        </Map>
        <ListComponent />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapComponent);

