import React, { useState } from 'react';
import './App.scss';
import { Logout } from './components/Logout/Logout';
import { Authorization } from './components/Authorization/Authorization';
import { Map } from './components/Map/Map';

export const App = () => {
  const [authorization, setAuthorization] = useState(false);

  return (
    <div>
      {authorization && (<Logout exit={setAuthorization} />)}

      {authorization
        ? <Map />
        : (<Authorization authorizationStatus={setAuthorization} />)}
    </div>
  );
};
