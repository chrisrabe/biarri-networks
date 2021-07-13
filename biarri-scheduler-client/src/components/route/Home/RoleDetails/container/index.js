import { connect } from 'react-redux';
import RoleDetails from '../index';

const mapStateToProps = (state) => ({
  roles: state.scheduler.roles,
});

export default connect(mapStateToProps)(RoleDetails);
