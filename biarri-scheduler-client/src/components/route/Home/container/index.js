import { connect } from 'react-redux';
import {
  getRoles,
  getShifts,
  getEmployees,
} from 'redux/slices/scheduler.slice';
import Home from '../index';

const mapStateToProps = () => ({});

const mapDispatch = (dispatch) => ({
  getRoles: () => dispatch(getRoles()),
  getShifts: () => dispatch(getShifts()),
  getEmployees: () => dispatch(getEmployees()),
});

export default connect(mapStateToProps, mapDispatch)(Home);
