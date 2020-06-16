import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';

import './App.css';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyle from './mapFolder/mapStyle'
// import {formatRelative} from "date-fns";
export default function App() {

  
  const libraries = ["places"];
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  })
  
  const mapContainerStyle = {
      width: "100vw",
      height: "100vh"
    }
    const center = {
      lat: 40.7128,
      lng: -74.0060,
    }
    const style = {
      styles: mapStyle,
      disableDefaultUI: true,
      zoomControl: true,
    }

    const [markers, setMarkers] = React.useState([]);
    // setMarkers( current => [...current, {
    //   lat: 40.7587770701,
    //   lng: -73.9658396999
    // }])
    if (loadError) return "Error"
    if (!isLoaded) return "Loading Maps"

    
  return (
      <div>
       <GoogleMap mapContainerStyle= {mapContainerStyle}
        zoom={12}
        options = {style}
        center={center}
        
        onLoad = { () => {
         setMarkers(current => [...current, {
            lat: 40.7587770701,
            lng: -73.9658396999
 
          }])
        }}
        
        >
          {markers.map ((mker) => (
            // <Marker key = {mker.time.toISOString()}
            <Marker
            key = { `${mker.lat}-${mker.lng}` }
            position={{ lat: mker.lat, lng: mker.lng}} />
            ))}
        </GoogleMap>
        {/* <iframe src="https://snazzymaps.com/embed/244041" width="100%" height="600px" style="border:none;"></iframe> */}
        </div>
  );
}


