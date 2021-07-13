import config from 'config.json';

import {
  HeaderText,
  HeaderContainer,
  LocationText,
  TimezoneText,
  LocationContainer,
} from './styles';

const Header = () => (
  <HeaderContainer>
    <HeaderText variant="h1">BAIRRI SCHEDULER</HeaderText>
    <LocationContainer>
      <LocationText variant="body1">{config.location}</LocationText>
      <TimezoneText variant="body2">{config.timezone}</TimezoneText>
    </LocationContainer>
  </HeaderContainer>
);

export default Header;
