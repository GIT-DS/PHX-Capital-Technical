import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <Link to={'/accounts'}>Accounts</Link>
                <Link to={'/accounts/create'}>Create an Account</Link>
                <Link to={'/landholdings'}>Land Holdings</Link>
                <Link to={'/landholdings/create'}>Create a Land Holding</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div>
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div id='nav-bar'>
            <h1>Pheonix Capital Group</h1>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;