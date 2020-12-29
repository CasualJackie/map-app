import React from 'react';
import './Logout.scss';
import { LogoutShape } from '../../shapes/LogoutShape';

export const Logout = ({ exit }) => (
  <div className="logout">
    <button
      className="logout__button"
      onClick={() => exit(false)}
      type="button"
    >
      <b>Logout</b>
    </button>
  </div>
);

Logout.propTypes = LogoutShape;
