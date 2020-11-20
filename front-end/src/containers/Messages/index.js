// pour relier un dumb component/ stateless components au state contenu dans le store de Redux,
// on passe par la création d'un container. Ce container sera un composant qui viendra englober le composant stateless qui a besoin des informations du state et lui passera via ses props
// la fonction connect est une fonction HOC (High Order Component), elle va implémenter le composant parent (container) et ainsi on va pouvoir passer nos informations via les props
import { connect } from 'react-redux';

// on importe le composant qui a besoin d'être connecté au state contenu dans le store
import Messages from 'src/components/Messages';

// mapStateToProps est la fonction qu'on passera à connect pour venir lire le state
const mapStateToProps = (state) => ({
  messages: state.messages,
});

// on fournit à connect la fonction mapStateToProps qui va retourner un objet avec ce qu'on veut récupérer du state. connect nous renvoie une fonction qui prendra en paramètre le composant qu'on souhaite connecter
const componentToConnect = connect(mapStateToProps);
// une fois que connect à récupérer ce qu'on lui a demandé avec mapStateToProps, il nous renvoie une fonction qui prend en paramètre le composant à connecter. Ce sera notre container.
const container = componentToConnect(Messages);
// le container sera notre composant enrichi des props
export default container;

// on peut écrire sur une ligne pour se simplifier la vie
// export default connect(mapStateToProps)(Messages);
