import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home } from 'components/route';

const Router = () => (
  <React.Suspense fallback={<></>}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </React.Suspense>
);

export default Router;
