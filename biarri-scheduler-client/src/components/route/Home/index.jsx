import Header from 'components/route/Home/Header';
import Scheduler from 'devextreme-react/scheduler';
import { useEffect } from 'react';
import { getRoles } from 'api';
import { Body } from './styles';

const views = ['day', 'month', 'week'];

const Home = () => {
  useEffect(() => {
    getRoles().then((res) => {
      console.log(res);
    });
  }, []);

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
