import { WS_CONNECT, SEND_MESSAGE, addMessage } from 'src/actions';

let socket;

const websocket = (store) => (next) => (action) => {
  console.log('je passe dans le middleware websocket', action);

  switch (action.type) {
    case WS_CONNECT: {
      // on se connecte au server websocket
      socket = window.io('http://localhost:3001/');

      // un peu comme addEventListener('click', callback)
      // on écoute l'événement "send_message" qui arrivent du serveur
      socket.on('send_message', (message) => {
        console.log(`je reçois ce message envoyé du websocket :`);
        console.log(message);

        // une fois que je reçois un nouveau message provenant du serveur Websocket, je veux l'insérer dans la liste des messages. J'ai accès au store, donc je peux dispatch l'action pour ajouter un message : addMessage
        store.dispatch(addMessage(message));
      });

      break;
    }
    case SEND_MESSAGE: {
      console.log('je passe dans SEND_MESSAGE');
      // on a accès au store passé en paramètre de la 1e fonction du middleware, du coup on peut récupérer le state courant
      const state = store.getState();

      // un peu comme store.dispatch(action)
      const message = {
        author: state.username,
        content: state.messageValue,
      };

      // j'envoie au serveur l'événement 'send_message' avec la donnée du nouveau message
      socket.emit('send_message', message);

      break;
    }
    default:
      next(action);
      break;
  }
};

export default websocket;
