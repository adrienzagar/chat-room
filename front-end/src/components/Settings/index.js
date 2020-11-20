/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';
import './styles.scss';

const Settings = ({ open, toggle, login }) => {
  const handleOnClick = () => {
    toggle();
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    login();
  };

  return (
    <div className={`${open ? 'settings settings--open' : 'settings'}`}>
      <button
        onClick={handleOnClick}
        className="settings__toggler"
        type="button"
      >
        +
      </button>
      <form className="settings__form" onSubmit={handleOnSubmit}>
        <Field
          label="Adresse Email"
          id="email"
          type="email"
        />
        <Field
          label="Mot de passe"
          id="password"
          type="password"
        />
        <button
          className="settings__submit"
          type="submit"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default Settings;
