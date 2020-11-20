import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// pour avoir un comosant enrichi de props (qui viennent du state de Redux), on importe le container
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';

const Chatroom = ({ wsConnect }) => {
  // dès que notre composant racine est disponible (1e rendu), on exécute la fonction wsConnect, qui nous sera passée via les props et qui nous permettra de nous connecter au WebSocket
  useEffect(wsConnect, []);

  return (
    <div className="chatroom">
      <Settings />
      <Messages />
      <Form />
    </div>
  );
};

Chatroom.propTypes = {
  wsConnect: PropTypes.func.isRequired,
};

export default Chatroom;
