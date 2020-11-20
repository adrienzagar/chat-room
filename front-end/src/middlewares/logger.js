/* 
Un middleware est une fonction qu'on va donner au store
Le store va s'en servir pour tradurie des actions vers des effets (appels à une API, timers ...)
L'objet action passera par tous les middlewares tour à tour, et une fois qu'on sera arrivé au dernier middleware on passe dans le reducer
Dans le middleware on aura accès :
- store : on aura accès aux méthode du store getState() et dispatch()
- next : une fonction qui dit explicitement si on passe l'action au prochain middleware (reducer si dernier middleware) ou pas
- action : object action qu'on va intercepter, notre intention
*/

// on appelle ce genre d'écriture du currying
const logger = (store) => (next) => (action) => {
  // console.log(action);

  next(action);
};

export default logger;
