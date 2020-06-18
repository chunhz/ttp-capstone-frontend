import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyle from "../mapFolder/mapStyle";
import * as hotSpotData from "../data/NYCHotspot.json";
import  icon  from '../accessories/images/wifi-pointer-before-selected.png';
function MapComponent() {
 
  const [markers, setMarkers] = React.useState([]);
  const [pointedLocation, setPointedLocation] = React.useState([]);
  const [selectedWifi, setSelectedWifi] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const mapContainerStyle = {
    width: "70vw",
    height: "70vh",
  };
  const style = {
    styles: mapStyle,
    disableDefaultUI: true,
    zoomControl: true,
  };

  navigator.geolocation.getCurrentPosition((position) => {
    const currentLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentLocation(currentLocation);
  });

  if (loadError) return "Error";
  if (!isLoaded) return "Loading Maps";

  const areaHotSpotData=[];
  hotSpotData.default.map( ( hotSpot => {
    if ((hotSpot.Latitude - pointedLocation.lat < 0.3 || hotSpot.Latitude - pointedLocation.lat < -0.3) && (hotSpot.Longitude - pointedLocation.lng < 0.3 || hotSpot.Longitude - pointedLocation.lng < -0.3)  ){
      areaHotSpotData = hotSpot;
      console.log(areaHotSpotData);
    }

  }))
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        options = {
          style}
        center={currentLocation}
        onLoad={() => {
          setMarkers((current) => [...current, {}]);
        }}
        onDragEnd  = { (lat, lng) => {
          // setPointedLocation(current => [...current, {
          //   lat: event.latlng.lat(),
          //   lng: event.latlng.lng(),
          // }])
          const lat1 = lat;
          console.log(lat1)
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
          setSelectedWifi(hotSpot);
        }
      }
        
        
          />
        ))}
        {selectedWifi && (
          <InfoWindow
            position={{ lat: selectedWifi.Latitude, lng: selectedWifi.Longitude }}
            onCloseClick={() => {
              setSelectedWifi(null);
            }}
          >
            <div>
              <b><p>Wifi-Hotspot Info</p></b>
              <ul>
                <li>SSID: {selectedWifi.SSID}</li>
                <li>Provider: {selectedWifi.Provider}</li>
                <li>Borough: {selectedWifi.City}</li>
                <li>Wifi-Session: {selectedWifi.Type}</li>
                <li>Location-Type: {selectedWifi.Location_T}</li>
              </ul>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

export default MapComponent;
