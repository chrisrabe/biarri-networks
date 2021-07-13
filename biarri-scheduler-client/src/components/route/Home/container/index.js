import { connect } from 'react-redux';
import { getRoles, getShifts } from 'redux/slices/scheduler.slice';
import Home from '../index';

const mapStateToProps = () => ({});

const mapDispatch = (dispatch) => ({
  getRoles: () => dispatch(getRoles()),
  getShifts: () => dispatch(getShifts()),
});

export default connect(mapStateToProps, mapDispatch)(Home);
