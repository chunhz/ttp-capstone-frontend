import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import mapStyle from "../mapFolder/mapStyle";
import icon from "../accessories/images/wifi-pointer-before-selected.png";
import redPointer from "../accessories/images/red-pointer.png";
import { getHotSpots } from "../actions/hotspotActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ListComponent from "./ListComponent";
import '../styles/mapStyle.css'
class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: null,
      pointedLocation: null,
      selectedWifi: [],
      currentLocation: [],
      rerender : 1,
      defaultLocation: {
        lat: 40.7128,
        lng: -74.006,
      },
      isLocated: false,
      isLoaded: null,
      loadError: null,
      showSelectedWifi: false,
      showCurrentL: true,
    };
  }

  mapContainerStyle = {
    width: "100vw",
    height: "60vh",
  };

  listMarker = (id) => {
    console.log(id)
    // this.setState({defaultLocation: {
    //   lat: hotSpotData.default[id].Latitude,
    //   lng: hotSpotData.default[id].Longitude,
    // },
    // listId: id,
    // showHello: false,
    // showListInfo: true,
  // })
}
  componentDidMount() {
    navigator.geolocation.watchPosition((position) => {
      this.setState({
        currentLocation: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        isLocated: true,
      });
 
      this.props.getHotSpots();
    });
  }

  render() {

    const { hotSpots } = this.props.hotSpot;

    return (

      <div className = "map">
        <Map
          google={this.props.google}
          style={this.mapContainerStyle}
          styles={mapStyle}
          zoom={14}
          disableDefaultUI={true}
          zoomControl={true}
          streetViewControl={true}
          center={{
            lat: this.state.currentLocation.lat,
            lng: this.state.currentLocation.lng,
          }}
                   
        >
          {/* {hotSpots.map((hotSpot) =>  {
            return(              
                  <Marker
                    key={hotSpot._id}
                    position={{ lat: hotSpot.latitude, lng: hotSpot.longitudes }}
                    icon={{
                      url: icon,
                      scaledSize: new window.google.maps.Size(60, 60),
                    }}
                    onClick={() => {
                      this.setState({ selectedWifi: hotSpot, showSelectedWifi: true });
                       
                    }}
                    >
                    </Marker>
            )
          })} */}

            {/* displays user's location dialouge by default */}
            <InfoWindow
              visible={this.state.showCurrentL}
              position={{
                lat: this.state.currentLocation.lat,
                lng: this.state.currentLocation.lng,
              }}
              icon={{}}
              onClose={() => {
                this.setState({ showCurrentL: false });
              }}
            >
              <b>
                <p>You're here!</p>
              </b>
            </InfoWindow>
            <Marker
            position={{ lat: this.state.currentLocation.lat, lng: this.state.currentLocation.lng }}
            icon={{
              url: redPointer,
              scaledSize: new window.google.maps.Size(50,50),
             }}
             onClick = {(()=>{
              this.setState({showCurrentL: true});
             })}
            />

            {/* displays info window for wifi icon being clicked */}
            <InfoWindow
              visible={this.state.showSelectedWifi}
              position={{
                lat: this.state.selectedWifi.latitude,
                lng: this.state.selectedWifi.longitudes,
              }}
              onClose={() => {
                this.setState({ showSelectedWifi: false });
              }}
            >
              <div>
                <b>
                  <p>Wifi-Hotspot Info</p>
                </b>
                <ul>
                  <li>Name: {this.state.selectedWifi.name}</li>
                  <li>SSID: {this.state.selectedWifi.ssid}</li>
                  <li>Location: {this.state.selectedWifi.location}</li>
                  <li>ZipCode: {this.state.selectedWifi.zipcode}</li>
                  <li>Provider: {this.state.selectedWifi.provider}</li>
                  <li>Borough: {this.state.selectedWifi.boroughName}</li>
                  <li>Wifi-Session: {this.state.selectedWifi.type}</li>
                  <li>Location-Type: outdoor</li>
                </ul>
                
              </div>
            </InfoWindow>
            
         
           
        </Map>
        <ListComponent wifiLists = {hotSpots} listMarker = {this.listMarker}/>
       
      </div>
    );
  }
}

MapComponent.propTypes = {
  getHotSpots: PropTypes.func.isRequired,
  hotSpot: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  hotSpot: state.hotSpot,
});

export default connect(mapStateToProps, { getHotSpots })(
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })(MapComponent)
);
