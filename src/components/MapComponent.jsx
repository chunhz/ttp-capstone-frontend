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
      selectedWifi: [],
      userLocation: [],
      defaultLocation: [],
      showInfoWindow: false,
      showHello: true,
      showListInfo: false,
      isLocated: false,
      isLoaded: null,
      loadError: null,
      listId: null,
    }
  }
  mapContainerStyle = {
    width: "100vw",
    height: "51vh",
  };

  locateMarker = (id) => {
    this.setState({defaultLocation: {
      lat: hotSpotData.default[id].Latitude,
      lng: hotSpotData.default[id].Longitude,
    },
    listId: id,
    showHello: false,
    showListInfo: true,
  })

  }
  
  componentDidMount() {
    navigator.geolocation.watchPosition((position) => {
        this.setState({
          userLocation: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          },
          isLocated: true,
        })
      });
  }
  

  render() {
    console.log(this.state.defaultLocation.lat);
    
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
          center={{lat: this.state.defaultLocation.lat, lng: this.state.defaultLocation.lng } }
          // centerAroundCurrentLocation={true}
      
          // onCenterChanged={{lat: this.state.defaultLocation.lat, lng: this.state.defaultLocation.lng } }
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
          {/* displays user locaiton with a dialouge and red pointer  */}
          {this.state.isLocated && (
            <InfoWindow
              visible = {this.state.showHello}
              position={{ lat: this.state.userLocation.lat, lng: this.state.userLocation.lng }}
              icon = {{}}
              onClose={() => {
                this.setState({showHello: false});
              }}
            >
            <b><p>Hello! You're here!</p></b>
            </InfoWindow>
          )}
          {/* displays InfoWindow when wifi icon being clicked*/}
            <InfoWindow
              visible = {this.state.showInfoWindow}
              position={{lat: this.state.defaultLocation.lat, lng: this.state.defaultLocation.lng }}
              onCloseClick={() => {
                this.setState({defaultLocation: null});
              }}
            >
              <div>
                <b><p>Wifi-Hotspot Info</p></b>
                <ul>
                  <li>SSID: {this.state.defaultLocation.SSID}</li>
                  <li>Provider: {this.state.defaultLocation.Provider}</li>
                  <li>Borough: {this.state.defaultLocation.City}</li>
                  <li>Wifi-Session: {this.state.defaultLocation.Type}</li>
                  <li>Location-Type: {this.state.defaultLocation.Location_T}</li>
                </ul>
              </div>
            </InfoWindow>
            {/* displays infowindow when being clicked in the list */}
            <InfoWindow
              visible = {this.state.showListInfo}
              position={{ lat: this.state.selectedWifi.Latitude, lng: this.state.selectedWifi.Longitude }}
              onCloseClick={() => {
                this.setState({showListInfo: false});
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

          {
            <Marker
            position={{ lat: this.state.userLocation.lat, lng: this.state.userLocation.lng }}
            icon={{ 
              url: redPointer,
              scaledSize: new window.google.maps.Size(50,50),
             }}
            /> 
          }
        </Map>
        <ListComponent selectedWifi = {hotSpotData.default} locateMarker = {this.locateMarker}/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapComponent);

