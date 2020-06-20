import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import mapStyle from "../mapFolder/mapStyle";
import icon from "../accessories/images/wifi-pointer-before-selected.png";
import redPointer from "../accessories/images/red-pointer.png";
import { getHotSpots } from "../actions/hotspotActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: null,
      pointedLocation: null,
      selectedWifi: false,
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
        // currentLat: position.coords.latitude,
        // currentLng: position.coords.longitude,
        isLocated: true,
      });
      // console.log(this.state.currentLat)
      // console.log(this.state.currentLng)
      // ,
      this.props.getHotSpots();
    });
  }

  render() {



  // X = latitude
  // Y=  longtitudes
    let i = 0;
    let x = [];
    let y = [];

    const { hotSpots } = this.props.hotSpot;
  
      for(var key in hotSpots){
        x[i] = (hotSpots[key].latitude)
        // console.log("x" +x[i])
        y[i] = (hotSpots[key].longitudes)
        i++
        // console.log("y" +y[i])
      }
   


    // if (this.state.loadError) return "Error";
    // if (!this.state.isLoaded) return "Loading Maps";
    console.log("is located " + this.state.isLocated);
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

          onClick={(event) => {
            // this.setState(current => [...current, {
            //   lat: event.latLng.lat(),
            //   lng: event.latLng.lng(),
            // }])
            // this.setState({ selectedWifi: true})
          }}
        >
          {hotSpots.map(function(hotSpot, index )  {
            return(              
                  <Marker
                    key={index}
                    position={{ lat: x[index], lng: y[index] }}
                    icon={{
                      url: icon,
                      scaledSize: new window.google.maps.Size(60, 60),
                    }}
                  
                    onClick={() => {
                      this.setState({ selectedWifi: hotSpot });
                    }}>
                      
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
          {this.state.selectedWifi && (
            <InfoWindow
              visible={true}
              position={{
                lat: this.state.selectedWifi.Latitude,
                lng: this.state.selectedWifi.Longitude,
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
                  <li>SSID: {this.state.selectedWifi.SSID}</li>
                  <li>Provider: {this.state.selectedWifi.Provider}</li>
                  <li>Borough: {this.state.selectedWifi.City}</li>
                  <li>Wifi-Session: {this.state.selectedWifi.Type}</li>
                  <li>Location-Type: {this.state.selectedWifi.Location_T}</li>
                </ul>
              </div>
            </InfoWindow>
          )}
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
