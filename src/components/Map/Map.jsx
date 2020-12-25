import React from 'react';
import './Map.scss';
import {
  GoogleMap,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import { GOOGLE_MAP_API_KEY } from '../../api/getKey';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 46.482525,
  lng: 30.723309,
};

export const Map = () => (
  <div className="container">
    <LoadScript
      googleMapsApiKey={GOOGLE_MAP_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker
          position={{
            lat: 46.482525, lng: 30.723309,
          }}
          title="hello world"
        />
      </GoogleMap>
    </LoadScript>
  </div>
);
