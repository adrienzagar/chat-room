import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Field = ({
  label,
  type,
  id,
  value,
  setValue,
}) => {
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="field">
      <label
        className="field__label"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="field__input"
        id={id}
        type={type}
        placeholder={label}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
};

export default Field;
