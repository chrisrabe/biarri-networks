import { connect } from 'react-redux';
import Roster from '../index';

const mapStateToProps = (state) => ({
  shifts: state.scheduler.shifts,
  employees: state.scheduler.employees,
  roles: state.scheduler.roles,
});

export default connect(mapStateToProps)(Roster);
