import React, { useState } from 'react';
import './App.scss';
import { Authorization } from './components/Authorization/Authorization';
import { Map } from './components/Map/Map';

export const App = () => {
  const [authorization, setAuthorization] = useState(false);

  return (
    <div className="container">
      {authorization
        ? <Map />
        : <Authorization authorizationStatus={setAuthorization} />}
    </div>
  );
};
