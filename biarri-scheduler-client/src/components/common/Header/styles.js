import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const HeaderText = styled(Typography)`
  line-height: 1.5;
  font-size: 2.5em;
  font-weight: 300;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  padding: 1vmin 2vmin;
`;

export const LocationText = styled(Typography)`
  font-size: 1.5em;
  font-weight: 400;
  text-align: end;
`;

export const TimezoneText = styled(Typography)`
  text-align: end;
  opacity: 0.5;
`;

export const LocationContainer = styled.div`
  justify-content: flex-end;
`;
