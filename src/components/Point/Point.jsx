import React, { useState, memo, useCallback } from 'react';
import './Point.scss';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { PointShape } from '../../shapes/PointShape';

export const Point = memo(({ marker }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  return (
    <div>
      <Marker
        position={{
          lat: Number(marker[3]), lng: Number(marker[4]),
        }}
        onClick={handleClick}
      />
      {isOpen && (
        <InfoWindow
          onCloseClick={() => setIsOpen(false)}
          position={{
            lat: Number(marker[3]), lng: Number(marker[4]),
          }}
        >
          <div className="marker__info">
            <div className="marker__title">Installation date</div>
            {marker[0]}
            <div className="marker__title">Modified Date</div>
            {marker[1]}
            <div className="marker__title">Account Number</div>
            {marker[2]}
            <div className="marker__title">Latitude</div>
            {marker[3]}
            <div className="marker__title">Longitude</div>
            {marker[4]}
            <div className="marker__title">City</div>
            {marker[5]}
            <div className="marker__title">ATE Installed Room</div>
            {marker[8]}
            <div className="marker__title">Device Type</div>
            {marker[9]}
            <div className="marker__title">Room Description</div>
            {marker[10]}
          </div>
        </InfoWindow>
      )}
    </div>
  );
});

Point.propTypes = PointShape;
