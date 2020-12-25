import React, { useState } from 'react';
import './Authorization.scss';
import { AuthorizationShape } from '../../shapes/AuthorizationShape';

export const Authorization = ({ authorizationStatus }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleAuthorization = () => {
    if (login === 'admin' && password === 'admin') {
      authorizationStatus(true);
    }
  };

  return (
    <div className="authorization">
      <form
        className="authorization__form"
        onSubmit={handleAuthorization()}
      >
        <input
          className="authorization__item"
          onChange={event => setLogin(event.target.value)}
          type="text"
          placeholder="Login"
        />

        <input
          className="authorization__item"
          onChange={event => setPassword(event.target.value)}
          type="text"
          placeholder="Password"
        />
      </form>
    </div>
  );
};

Authorization.propTypes = AuthorizationShape;
