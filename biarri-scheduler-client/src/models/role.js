import PropTypes from 'prop-types';

const Role = PropTypes.shape({
  id: PropTypes.number.isRequired,
  background_colour: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text_colour: PropTypes.string.isRequired,
});

export default Role;
