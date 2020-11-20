// https://github.com/O-clock-Alumni/fiches-recap/blob/master/react/redux.md#r%C3%A9sum%C3%A9
import { connect } from 'react-redux';

import Settings from 'src/components/Settings';
import { toggleSettings, login } from 'src/actions';

const mapStateToProps = (state) => ({
  open: state.open,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => {
    console.log('je veux changer la valeur de open');
    // en 2 temps
    // const action = toggleSettings();
    // dispatch(action);

    dispatch(toggleSettings());
  },
  login: () => {
    // console.log('je veux me logguer et récupérer le username');
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
