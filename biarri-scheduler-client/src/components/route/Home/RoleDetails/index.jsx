import PropTypes from 'prop-types';
import RoleModel from 'models/role';
import Role from './Role';
import { Container } from './styles';

const RoleDetails = (props) => {
  const { roles } = props;

  return (
    <Container>
      {roles.map((role) => (
        <Role
          key={role.id}
          name={role.name}
          backgroundColour={role.background_colour}
          textColour={role.text_colour}
        />
      ))}
    </Container>
  );
};

RoleDetails.propTypes = {
  roles: PropTypes.arrayOf(RoleModel).isRequired,
};

export default RoleDetails;
