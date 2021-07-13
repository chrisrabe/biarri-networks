import PropTypes from 'prop-types';
import Employee from 'models/employee';
import Role from 'models/role';

const Shift = PropTypes.shape({
  id: PropTypes.number.isRequired,
  start_time: PropTypes.string.isRequired,
  end_time: PropTypes.string.isRequired,
  break_duration: PropTypes.number.isRequired,
  employee_id: PropTypes.number,
  role_id: PropTypes.number,
  employee: Employee.isRequired,
  role: Role.isRequired,
});

export default Shift;
