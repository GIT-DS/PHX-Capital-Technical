import React from 'react';
import AccountsIndexContainer from '../accounts/account_index/accounts_index_container';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Welcome to Pheonix Capital Group</h1>
        <AccountsIndexContainer/>
      </div>
    );
  }
}

export default MainPage;