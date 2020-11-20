import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

import './styles.scss';

const Messages = ({ messages }) => {
  const containerElement = useRef(null);
  // const lastListElement = useRef(null);
  useEffect(() => {
    // ©Guillaume + Thibault 1e solution pour scroller en bas de la liste des messages
    // lastListElement.current.scrollIntoView(lastListElement);

    // 2e solution
    const scrollY = containerElement.current.scrollHeight;
    containerElement.current.scrollTo(0, scrollY);
  }, [messages]);

  return (
    <div
      ref={containerElement}
      className="messages"
    >
      {messages.map((message) => (
        <Message
          key={message.id}
          {...message}
        />
      ))}
      {/* pour la 1e solution du scroll, il faut rajouter un élément en bas de l'élément qui aura la barre de scroll */}
      {/* <div ref={lastListElement} /> */}
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Messages;
