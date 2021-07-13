import PropTypes from 'prop-types';

const Employee = PropTypes.shape({
  id: PropTypes.number.isRequired,
  last_name: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
});

export default Employee;
