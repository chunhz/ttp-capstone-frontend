import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import mapStyle from "../mapFolder/mapStyle";
import icon from "../accessories/images/wifi-pointer-before-selected.png";
import redPointer from "../accessories/images/red-pointer.png";
import { getHotSpots } from "../actions/hotspotActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import hotspotForm from "./AddHotspotForm";

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: null,
      pointedLocation: null,
      selectedWifi: [],
      currentLocation: null,
      rerender : 1,
      defaultLocation: {
        lat: 40.7128,
        lng: -74.006,
      },
      isLocated: false,
      isLoaded: null,
      loadError: null,
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    };
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

  componentDidMount() {
    navigator.geolocation.watchPosition((position) => {
      this.setState({
        defaultLocation: {
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
  
    console.log(this.state.selectedWifi)

    return (
      <div>
        <Map
          google={this.props.google}
          style={this.mapContainerStyle}
          styles={mapStyle}
          zoom={14}
          disableDefaultUI={true}
          zoomControl={true}
          streetViewControl={true}
          initialCenter={{
            lat: this.state.defaultLocation.lat,
            lng: this.state.defaultLocation.lng,
          }}
          
          // initialCenter={{ lat: this.state.currentLat, lng: this.state.currentLng }}
         
        >
          {/* {hotSpots.map((hotSpot) => {
            console.log(hotSpot.city);
          })} */}
          {hotSpots.map((hotSpot) =>  {
            return(              
                  <Marker
                    key={hotSpot._id}
                    position={{ lat: hotSpot.latitude, lng: hotSpot.longitudes }}
                    icon={{
                      url: icon,
                      scaledSize: new window.google.maps.Size(60, 60),
                    }}
                    onClick={() => {
                      this.setState({ selectedWifi: hotSpot });
                    }}
                    >
                      
                    </Marker>
            )
          })}

          {this.state.isLocated && (
            <InfoWindow
              visible={true}
              position={{
                lat: this.state.defaultLocation.lat,
                lng: this.state.defaultLocation.lng,
              }}
              icon={{}}
              onCloseClick={() => {
                this.setState({ defaultLocation: null });
              }}
            >
              <b>
                <p>You're here!</p>
              </b>
            </InfoWindow>
            // <Marker
            // position={{ lat: this.state.defaultLocation.lat, lng: this.state.defaultLocation.lng }}
            // icon={{
            //   url: redPointer,
            //   scaledSize: new window.google.maps.Size(60,60),
            //  }}
            // />
          )}

            <InfoWindow
              visible={true}
              position={{
                lat: this.state.selectedWifi.latitude,
                lng: this.state.selectedWifi.longitudes,
              }}
              onCloseClick={() => {
                this.setState({ currentLocation: null });
              }}
            >
              <div>
                <b>
                  <p>Wifi-Hotspot Info</p>
                </b>
                <ul>
                  <li>SSID: {this.state.selectedWifi.ssid}</li>
                  <li>Provider: {this.state.selectedWifi.provider}</li>
                  <li>Borough: {this.state.selectedWifi.city}</li>
                  <li>Wifi-Session: {this.state.selectedWifi.type}</li>
                  <li>Location-Type: {this.state.selectedWifi.name}</li>
                </ul>
                
              </div>
            </InfoWindow>
        </Map>
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
