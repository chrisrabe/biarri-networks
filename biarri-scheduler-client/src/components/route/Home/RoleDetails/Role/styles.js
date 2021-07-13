import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  margin-left: 10px;
`;
