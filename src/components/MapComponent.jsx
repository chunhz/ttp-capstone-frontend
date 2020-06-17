import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyle from "../mapFolder/mapStyle";
import * as hotSpotData from "../data/NYCHotspot.json";
import NYCHotSpotAPI from "../data/NYCHotSpotAPI";

function MapComponent() {
  const libraries = ["places"];
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
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

  const [markers, setMarkers] = React.useState([]);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading Maps";
  console.log(hotSpotData.default);
  const arr = [40.75, 41.75, 39, 50];
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
          />
        ))}
      </GoogleMap>
    </div>
  );
}

export default MapComponent;
