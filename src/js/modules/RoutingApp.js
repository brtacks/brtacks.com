import Provider from 'react-redux/lib/components/Provider';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ConnectedRouter from 'react-router-redux/ConnectedRouter';
import appHistory from '../tools/appHistory';
import store from '../store';

import { PageLayout, HomePage } from './core/components';

const RoutingApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={appHistory}>
      <PageLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </PageLayout>
    </ConnectedRouter>
  </Provider>
);

export default RoutingApp;
