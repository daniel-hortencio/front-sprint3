import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { routes } from '../constants/routes';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  </Router>
);

export default Routes;
