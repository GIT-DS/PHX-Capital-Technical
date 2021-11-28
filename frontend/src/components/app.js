import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import AccountCreateContainer from './accounts/account_create/account_create_container';
import LandHoldingCreateContianer from './landHoldings/landholdings_create/landholdings_create_container.js';
import LandHoldingIndexContianer from './landHoldings/landholdings_index/landholdings_index_container'

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import LandHoldingsEditContainer from './landHoldings/landholdings_edit/landholdings_edit_container';
import AccountEditContainer from './accounts/account_edit/account_edit_container'
import AccountIndexContainer from './accounts/account_index/accounts_index_container'
const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute path='/accounts/create' component={AccountCreateContainer} />
      <ProtectedRoute path='/accounts/edit/:accountId' component={AccountEditContainer}/>
      <ProtectedRoute path='/accounts/' component={AccountIndexContainer}/>
      <ProtectedRoute path='/landHoldings/create' component={LandHoldingCreateContianer} />
      <ProtectedRoute path='/landHoldings/edit/:landHoldingId' component={LandHoldingsEditContainer} />
      <ProtectedRoute path='/landHoldings/' component={LandHoldingIndexContianer} />
      <ProtectedRoute path="/" component={MainPage} />

    </Switch>
  </div>
);

export default App;