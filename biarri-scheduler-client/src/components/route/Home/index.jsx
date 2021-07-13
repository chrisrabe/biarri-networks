import { useEffect } from 'react';
import Header from 'components/common/Header';
import { Body } from './styles';
import RoleDetails from './RoleDetails/container';
import Roster from './Roster/container';

const Home = (props) => {
  const { getRoles, getShifts, getEmployees } = props;

  useEffect(() => {
    getRoles();
    getShifts();
    getEmployees();
  }, [getRoles, getShifts, getEmployees]);

  return (
    <div>
      <Header />
      <Body>
        <RoleDetails />
        <Roster />
      </Body>
    </div>
  );
};

export default Home;
