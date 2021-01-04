import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { GOOGLE_MAP_API_KEY } from '../../api/getKey';
import places from '../../data/places.csv';
import { Point } from '../Point/Point';
import './Map.scss';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 24.30578,
  lng: 54.539402,
};

export const Map = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    Papa.parse(places, {
      download: true,
      complete(rowsFromFile) {
        const result = rowsFromFile.data.map(
          (row, index) => [...row, index],
        );

        result.splice(0, 1);
        setRows(result);
      },
    });
  }, []);

  return (
    <div>
      <LoadScript
        googleMapsApiKey={GOOGLE_MAP_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={7}
        >
          {rows.map(marker => (
            <Point key={marker[11]} marker={marker} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
