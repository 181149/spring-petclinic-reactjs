import * as React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';

import WelcomePage from './components/WelcomePage';
import FindOwnersPage from './components/owners/FindOwnersPage';
import OwnersPage from './components/owners/OwnersPage';
import NewOwnerPage from './components/owners/NewOwnerPage';
import EditOwnerPage from './components/owners/EditOwnerPage';
import VetsPage from './components/vets/VetsPage';
import ErrorPage from './components/ErrorPage';


import NotFoundPage from './components/NotFoundPage';



export default () => (
  <Route component={App}>
    <Route path='/' component={WelcomePage} />
    <Route path='/owners/list' component={FindOwnersPage} />
    <Route path='/owners/new' component={NewOwnerPage} />
    <Route path='/owners/:ownerId/edit' component={EditOwnerPage} />
    <Route path='/owners/:ownerId' component={OwnersPage} />
    <Route path='/vets' component={VetsPage} />
    <Route path='/error' component={ErrorPage} />
    <Route path='*' component={NotFoundPage} />
  </Route>
);

