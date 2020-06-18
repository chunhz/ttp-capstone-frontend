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
  const [selectedWifi, setSelectedWifi] = React.useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const mapContainerStyle = {
    width: "70vw",
    height: "70vh",
  };
  const center = {
    lat: 40.7128,
    lng: -74.006,
  };
  const style = {
    styles: mapStyle,
    disableDefaultUI: true,
    zoomControl: true,
  };


  if (loadError) return "Error";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        options={style}
        center={center}
        onLoad={() => {
          setMarkers((current) => [...current, {}]);
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
        onClick = { () => {
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
              <p>Wifi-Hotspot Info</p>
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
