import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow} from "google-maps-react";
import mapStyle from "../mapFolder/mapStyle";
import icon from "../accessories/images/wifi-pointer-before-selected.png";
import redPointer from "../accessories/images/red-pointer.png";
import { getCloseHotSpots, getManhattan,getQueens,getStatenIsland,getBrooklyn,getBronx } from "../actions/hotspotActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ListComponent from "./ListComponent";
import '../styles/mapStyle.css';
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';



class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: null,
      pointedLocation: null,
      selectedWifi: [],
      currentLocation: [],
      hotSpots: {},
      hotSpotsData: [],
      rerender : 1,
      centerLocation: {
        lat: 40.7128,
        lng: -74.006,
      },
      isLocated: false,
      isLoaded: null,
      loadError: null,
      showSelectedWifi: false,
      showCurrentL: true,
      showListInfo: false,
      selectedList: [],
      zoomSize: 13,
      foundZipCode : null,
      draggable: true,
      address: '',
    };
    this.getManhattanWifi = this.getManhattanWifi.bind(this)
    this.getQueensWifi = this.getQueensWifi.bind(this)
    this.getStatenIslandWifi = this.getStatenIslandWifi.bind(this)
    this.getBrooklynWifi = this.getBrooklynWifi.bind(this);
    this.getBronxWifi = this.getBronxWifi.bind(this)
    this.getClosestWifi = this.getClosestWifi.bind(this);


  }

  mapContainerStyle = {
    width: "100vw",
    height: "50vh",
  };


          componentDidMount() {

            

            navigator.geolocation.watchPosition((position) => {
              this.setState({
                currentLocation: {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                },
                centerLocation: {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                },
                isLocated: true,
                
              });
              this.setState({hotSpotsData: this.state.hotSpots.hotSpots})
              console.log("cur lat"+this.state.currentLocation.lat)
              //Convert input location into zip code
              const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.currentLocation.lat},${ this.state.currentLocation.lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
              axios
                  .get(url)
                  .then((response) =>{
                    const data =response.data;
                    console.log(data.results[0].address_components)
                    //Get address
                    let thelength  = data.results[0].address_components.length;  
                    
                   
                    //GET ZIPCODE
                    if(  data.results[0].address_components[thelength-1].long_name.length === 5 &&  data.results[0].address_components[thelength-1].short_name.length === 5)
                          this.setState({foundZipCode: data.results[0].address_components[thelength-1].long_name});
                    else
                              this.setState({foundZipCode: data.results[0].address_components[thelength-2].long_name});



                  })
                          .catch((err) =>{
                            console.log(err);
                          })
                    try{
                          console.log("Found ZipCode " + this.state.foundZipCode)
                          this.props.getCloseHotSpots(this.state.foundZipCode);
                    }
                    catch(err)
                    {
                      console.log(err)
                    }
            });
          }
          getManhattanWifi(){
            this.props.getManhattan();
            this.setState({centerLocation: {
              lat: 40.758896,
              lng: -73.985130
            },showCurrentL:false, showListInfo:false, showSelectedWifiL: false,})
          }

          getQueensWifi(){
            this.props.getQueens();
            this.setState({centerLocation: {
              lat:  40.742054,
              lng: -73.769417
            },showCurrentL:false, showListInfo:false, showSelectedWifiL: false,})
          }

          getStatenIslandWifi(){
            this.props.getStatenIsland();
            this.setState({centerLocation: {
              lat:  40.579021,
              lng: -74.151535
            },showCurrentL:false, showListInfo:false, showSelectedWifiL: false,})
          }

          getBrooklynWifi(){
            this.props.getBrooklyn();
            this.setState({centerLocation: {
              lat:  40.650002, 
              lng: -73.949997
            },showCurrentL:false, showListInfo:false, showSelectedWifiL: false,})
            
          }

          getBronxWifi(){
            this.props.getBronx();
            this.setState({centerLocation: {
              lat:  40.837048,
              lng:  -73.865433
            },showCurrentL:false, showListInfo:false, showSelectedWifiL: false,})
          }

          getClosestWifi(){
            this.props.getCloseHotSpots(this.state.foundZipCode);
            this.setState({centerLocation: {
              lat:  this.state.currentLocation.lat, 
              lng:  this.state.currentLocation.lng
            },
            showCurrentL:true, showListInfo:false, showSelectedWifiL: false,
          })
          }

          recenter =(searchLocation)=>{
          
            this.setState({
              currentLocation:{
                lat: searchLocation.lat,
                lng: searchLocation.lng,
              }
            })
           
          }



  render() {
    const { hotSpots } = this.props.hotSpot;

    const listMarker = (id) => {  
      this.setState({centerLocation: {
        lat: hotSpots[id].latitude,
        lng: hotSpots[id].longitudes,
      },
      draggable: false,
      selectedList: hotSpots[id],
      showCurrentL: false,
      showListInfo: true,
      showSelectedWifi: false,
      zoomSize: 12.5,
    })
    console.log(this.state.draggable)
  }
  const recenter =(searchLocation)=>{
 
    
    this.setState({
      currentLocation:{
        lat: JSON.stringify(searchLocation.lat),
        lng: JSON.stringify(searchLocation.lng),
      },
      centerLocation:{
        lat: JSON.stringify(searchLocation.lat),
        lng: JSON.stringify(searchLocation.lng),
      },
    })
    
    const zip = fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.currentLocation.lat},${ this.state.currentLocation.lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`).then(response => response.json())
    .then(data => {
      console.log(data.results[0].address_components[data.results[0].address_components.length-1].long_name, )
      this.setState({foundZipCode: data.results[0].address_components[data.results[0].address_components.length-1].long_name})
      this.props.getCloseHotSpots(this.state.foundZipCode);
    });;

  }
        
    
  
    return (
      
      <div className = "map">
        
        <div className ="boroughButtons">
         <button className = "btn" onClick={this.getManhattanWifi}>Manhattan Wifi</button>
         <button className = "btn" onClick={this.getBrooklynWifi}>Brooklyn Wifi</button>
         <button className = "btn" onClick={this.getQueensWifi}>Queens Wifi</button>
         <button className = "btn" onClick={this.getBronxWifi} >Bronx Wifi</button>
         <button className = "btn" onClick={this.getStatenIslandWifi} >Staten Island Wifi</button>
         <button className = "btn" onClick={this.getClosestWifi}>Nearby Wifi</button>
         </div>

        <Map
          visible = {true} //1111
          google={this.props.google}
          style={this.mapContainerStyle}
          styles={mapStyle}
          zoom={this.state.zoomSize}
          disableDefaultUI={true}
          zoomControl={true}
          streetViewControl={true}
          draggable={this.state.draggable}
          center={{
            lat: this.state.centerLocation.lat,
            lng: this.state.centerLocation.lng,
          }}
          initialCenter={{
            lat: this.state.centerLocation.lat,
            lng: this.state.centerLocation.lng,
          }}
          onZoomChanged = { (...pra) => {
            console.log(pra)

          }
                      }
                   
        >
          {hotSpots.map((hotSpot) =>  {
            return(              
                  <Marker
                    key={hotSpot._id}
                    position={{ lat: hotSpot.latitude, lng: hotSpot.longitudes }}
                    icon={{
                      url: icon,
                      scaledSize: new window.google.maps.Size(60, 60),
                    }}
                    disableAutoPan={true}
                    onClick={() => {
                      this.setState({ 
                        selectedWifi: hotSpot,
                        showSelectedWifi: true,
                        showListInfo: false,
                        draggable: true,
                        centerLocation: {
                          lat: hotSpot.latitude, lng: hotSpot.longitudes
                        }
                       });
                       
                    }}
                    >
                    </Marker>
            )
          })}

            {/* displays user's location dialouge by default */}
            <InfoWindow
              visible={this.state.showCurrentL}
              position={{
                lat: this.state.currentLocation.lat,
                lng: this.state.currentLocation.lng,
              }}
              options={{disableAutoPan: true}}
              onClose={() => {
                this.setState({ showCurrentL: false });
              }}
              styles = {{ height: "200px", width: "150px"}}
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
              options={{disableAutoPan: true}}
              onClose={() => {
                this.setState({ showSelectedWifi: false });
              }}
            >
              <div className = "selectedWifi">
                <b>
                  <p>Wifi-Hotspot Info</p>
                </b>
                <ul>
                  <li>Name: {this.state.selectedWifi.name}</li>
                  <li>SSID: {this.state.selectedWifi.ssid}</li>
                  <li>Location: {this.state.selectedWifi.location}</li>
                  <li>ZipCode: {this.state.selectedWifi.zipCode}</li>
                  <li>Provider: {this.state.selectedWifi.provider}</li>
                  <li>Borough: {this.state.selectedWifi.boroughName}</li>
                  <li>Wifi-Session: {this.state.selectedWifi.type}</li>
                  <li>Location Type: {this.state.selectedWifi.locationType}</li>
                </ul>
                
              </div>
            </InfoWindow>
          
      {/* displays info window when list is being clicked  */}    
            <InfoWindow
              visible={this.state.showListInfo}
              position={{
                lat: this.state.centerLocation.latitude,
                lng: this.state.centerLocation.latitude,
              }}
              disableAutoPan = {true}
              onClose={() => {
                confirmAlert({
                  title: 'Return?',
                  message: 'Do you want to show your current location?',
                  buttons: [
                    {
                      label: 'Yes',
                      onClick: () => this.setState({ showListInfo: false, centerLocation: {
                        lat: this.state.currentLocation.lat, lng: this.state.currentLocation.lng
                      } })
                    },
                    {
                      label: 'No',
                      onClick: () => this.setState({ showListInfo: false, draggable: true})
                    }
                  ]
                });

                
              }}
            >
              <div className = "selectedList">
                <b>
                  <p>Hotspot is located here!</p>
                </b>
                  <li>Location: {this.state.selectedList.location}</li>

                  <li>Wifi-Session: {this.state.selectedList.type}</li>

                
              </div>
            </InfoWindow>
            <ListComponent wifiLists = {hotSpots} listMarker = {listMarker}/>

        </Map>
        <SearchBar recenter={recenter.bind(this)}/>
        </div>
    );
  }
}


MapComponent.propTypes = {
  getCloseHotSpots: PropTypes.func.isRequired,
  hotSpot: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  hotSpot: state.hotSpot,
});

export default connect(mapStateToProps, { getCloseHotSpots,getManhattan,getQueens,getStatenIsland,getBrooklyn,getBronx })(
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })(MapComponent)
);


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      address: '',
      searchLocation: {
        lat: 40.7128,
        lng: -74.006,
      },
    };
    
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng)
        this.setState({
          address,
          searchLocation:{
            lat: latLng.lat,
            lng: latLng.lng,
          }
        })
        this.props.recenter(this.state.searchLocation);
      }
        )
      .catch(error => console.error('Error', error));
    
    
  };
  
  render() {
    // console.log(this.state.searchLocation)

    return (
      <div className="search">
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect.bind(this)}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: 'rgb(233, 234, 235)', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      </div>
    );
  }
}