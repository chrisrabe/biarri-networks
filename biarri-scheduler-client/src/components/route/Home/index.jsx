import { useEffect } from 'react';
import Header from 'components/common/Header';
import { Body } from './styles';
import RoleDetails from './RoleDetails/container';
import Roster from './Roster';

const Home = (props) => {
  const { getRoles, getShifts } = props;

  useEffect(() => {
    getRoles();
    getShifts();
  }, [getRoles, getShifts]);

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
