import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Role = (props) => {
  const { name, backgroundColour, textColour } = props;
  return (
    <Container backgroundColor={backgroundColour} color={textColour}>
      {name}
    </Container>
  );
};

Role.propTypes = {
  name: PropTypes.string.isRequired,
  backgroundColour: PropTypes.string.isRequired,
  textColour: PropTypes.string.isRequired,
};

export default Role;
