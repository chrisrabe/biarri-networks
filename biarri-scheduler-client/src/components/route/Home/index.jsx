import { useEffect } from 'react';
import Header from 'components/common/Header';
import Scheduler from 'devextreme-react/scheduler';
import { Body } from './styles';

const views = ['day', 'month', 'week'];

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
        <Scheduler views={views} />
      </Body>
    </div>
  );
};

export default Home;
