import axios from 'axios';
import { LOGIN, change } from 'src/actions';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      console.log('ici je veux faire ma requête au server');

      const { email, password } = store.getState();

      axios.post('http://localhost:3001/login', {
        email,
        password,
      }).then((response) => {
        store.dispatch(change('username', response.data));
      }).catch((error) => console.log(error));

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default auth;
