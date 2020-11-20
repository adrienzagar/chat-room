import {
  ADD_MESSAGE,
  SET_MESSAGE_VALUE,
  TOGGLE_SETTINGS,
  CHANGE,
} from 'src/actions';

const initialState = {
  open: false,
  username: 'Anonyme',
  messageValue: '',
  email: '',
  password: '',
  // ©Thiéfaine
  messages: [],
};

// le reducer est une fonction dont le rôle est de renvoyer un state. Cette fonction prend en paramètre, le state courant et une action. L'action est objet qui a obligatoirement une propriété "type" et en fonction de ce type, on va créer un nouvel objet avec les modifications qu'on souhaite apporter au state. Et on va renvoyer ce nouveau state.
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      // Toujours interdit !!
      // on ne modifie JAMAIS le state directement
      // le state est immutable
      // state.messages.push(newMessage);

      const newMessages = [...state.messages];
      newMessages.push(action.message);

      return {
        ...state,
        messageValue: '',
        messages: newMessages,
      };
    }
    case SET_MESSAGE_VALUE: {
      return {
        ...state,
        messageValue: action.messageValue,
      };
    }
    case TOGGLE_SETTINGS:
      return {
        ...state,
        open: !state.open,
      };
    case CHANGE: {
      // comme on a une clé dynamique, on peut se servir de ce case pour changer n'importe quel value. Il suffira de préciser une key pour changer n'importe quelle propriété du state.
      return {
        ...state,
        // on peut rendre dynamique la clé d'une propriété d'un objet en mettant des crochets autour et en passant une string
        [action.key]: action.value,
      };
    }
    default:
      return state;
  }
};

export default reducer;
