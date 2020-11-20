import { connect } from 'react-redux';
import Field from 'src/components/Field';
import { change } from 'src/actions';

const mapStateToProps = (state, ownProps) => {
  // On peut récupérer les props d'un composant via le 2e paramètre de la fonction mapStateToProps. Par convention, on l'appelle ownProps.
  // console.log(ownProps.id);
  // on peut récupérer la valeur d'une propriété d'un objet de 2 façons différentes en JS. Soit via la notation pointée, soit, comme en PHP avec les tableaux associatifs, ouvrir les crochets après l'objet et précisé avec une chaine de caractère la propriété qu'on cible. Ces 2 écritures sont équivalentes :
  // state['password'],
  // state.password,

  // grâce à ownProps, je peux venir récupérer dynamiquement une valeur du state.
  return {
    value: state[ownProps.id],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  setValue: (value) => {
    console.log('je veux changer la value de mon champs');
    console.log(ownProps.id);
    // on vient stocker dans une variable l'objet action, qui nous est retourné par la fonction (action creator) change()
    const action = change(ownProps.id, value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
