import { connect } from 'react-redux';
import Chatroom from 'src/components/Chatroom';
import { wsConnect } from 'src/actions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  wsConnect: () => {
    dispatch(wsConnect());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
