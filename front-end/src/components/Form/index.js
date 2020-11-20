import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Form = ({ inputValue, setInputValue, sendMessage }) => {
  // pour cibler un élément dans le domaine réel et garder cette référence entre les render de React, on utilise le hook useRef
  const inputElement = useRef(null);

  // je veux donner le focus au champs input text au 1e rendu du Form
  useEffect(() => {
    inputElement.current.focus();
  }, []);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('handleOnSubmit: je veux ajouter un message à la liste');
    sendMessage();
  };

  const handleOnChange = (event) => {
    // console.log('handleOnChange ', event.target.value);

    setInputValue(event.target.value);
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <input
        ref={inputElement}
        value={inputValue}
        onChange={handleOnChange}
        type="text"
        className="form__input"
        placeholder="Saisissez votre message..."
      />
      <input type="submit" className="form__button" />
    </form>
  );
};

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default Form;
