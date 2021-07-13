import {
  HeaderText,
  HeaderContainer,
  LocationText,
  TimezoneText,
  LocationContainer,
} from 'components/route/Home/Header/styles';

import config from 'config.json';

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
