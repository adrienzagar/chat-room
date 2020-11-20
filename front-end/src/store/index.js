// pour créer notre store, Redux nous fournit la fonction createStore
import { createStore, applyMiddleware } from 'redux';
import reducer from 'src/reducers';
// pour pouvoir debugger plus facilement, on importe une fonction qui va relier notre application à l'extension Chrome
import { composeWithDevTools } from 'redux-devtools-extension';

import middlewares from 'src/middlewares';

// on crée le store en lui passant un reducer
// le store est une interface qui permet d'intéragir avec le state
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middlewares),
  ),
);

export default store;
