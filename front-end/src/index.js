// 1. Render - Rendu du comopsant racine dans le DOM depuis le point d'entrée
// 2. Découpe - dans le composant
// 3. Composants - portion d'UI, responsabilité = présentation
// 4. Styles - styles basiques, variables scss
// 5. Props - passer de la data statique
// 6. Store - gardien du state
// 7. initialState - SSoT (Single Source of Truth) nos données
// 8. Provider - react-redux diffuser le store à l'application
// 9. Containers - branchement en lecture
// 10. Containers - branchement en écriture
//   10.0 Brancher notre composant avec le container
//   10.1 Action Types - const qui mémorise le type d'action - évite les erreurs
//   10.2 Action Creators - fonction qui retourne l'object action et permet d'envoyer de la donnée
//   10.3 Reducer - réceptionne et traite les actions. génère un nouveau state TOUJOURS
//   10.4 Dispatch - émission de l'action
//   10.5 Event - exécution, dans le composant, de la fonction reçue en props, quand un événement se produit (onClick, onSubmit...)

// == Import : npm
import React from 'react';
import { render } from 'react-dom';

// pour faire le lien entre le store de Redux et notre application React, on utilise le composant Provider que nous fournit react-redux. Ce composant, donnera accès au store à tous ses composants enfants. Pour ce faire, il faut englober l'application avec ce composant et lui passer le store
import { Provider } from 'react-redux';

// on importe le store de Redux
import store from 'src/store';

// == Import : local
// Composants racine
import Chatroom from 'src/containers/Chatroom';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Provider store={store}>
    <Chatroom />
  </Provider>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
