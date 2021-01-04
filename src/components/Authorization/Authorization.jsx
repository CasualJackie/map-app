import React, { useState, memo, useCallback } from 'react';
import { AuthorizationShape } from 'shapes/AuthorizationShape';
import './Authorization.scss';

export const Authorization = memo(({ authorizationStatus }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState(false);

  const handleAuthorization = useCallback((event) => {
    event.preventDefault();

    if (login === 'admin' && password === 'admin') {
      authorizationStatus(true);
    }

    setInputError(true);
  }, [authorizationStatus, login, password]);

  const inputHandler = useCallback((event) => {
    const { value, name } = event.target;

    if (name === 'Login') {
      setLogin(value);
    }

    if (name === 'Password') {
      setPassword(value);
    }

    setInputError(false);
  }, [setPassword, setLogin]);

  return (
    <div className="authorization">
      <form
        className="authorization__form"
      >
        <input
          className="authorization__item"
          onChange={inputHandler}
          type="text"
          name="Login"
          placeholder="Login"
        />

        <input
          className="authorization__item"
          onChange={inputHandler}
          type="password"
          name="Password"
          placeholder="Password"
        />
        <button
          className="authorization__button"
          onClick={handleAuthorization}
          type="submit"
        >
          Open
        </button>
      </form>

      {inputError && (
        <div className="authorization__error">
          Incorrectly entered data!
        </div>
      )}
    </div>
  );
});

Authorization.propTypes = AuthorizationShape;
