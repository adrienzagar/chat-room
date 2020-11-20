import { connect } from 'react-redux';
import Form from 'src/components/Form';
import {
  addMessage,
  setMessageValue,
  sendMessage,
} from 'src/actions';

// stratégie de lecture du state
const mapStateToProps = (state) => ({
  inputValue: state.messageValue,
});

// stratégie d'écriture du state
const mapDispatchToProps = (dispatch) => ({
  sendMessage: () => {
    dispatch(sendMessage());
  },
  addMessage: () => {
    // console.log('addMessage; je veux changer le state');
    const action = addMessage();
    // équivalent à store.dispatch()
    dispatch(action);

    // on peut le faire en une ligne
    // dispatch(addMessage());
  },
  setInputValue: (messageValue) => {
    // console.log('setInputValue: je veux changer la valeur de messageValue du state par : ', messageValue);
    const action = setMessageValue(messageValue);
    dispatch(action);
    // dispatch(setMessageValue(messageValue));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
