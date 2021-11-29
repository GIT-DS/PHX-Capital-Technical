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
        const { pathname } = this.props.location
        return (
            <div className='nav-links'>
                {pathname === "/accounts" ? "" : <Link to={'/accounts'}>Accounts</Link>}
                {pathname === "/accounts/create" ? "" : <Link to={'/accounts/create'}>Create an Account</Link>}
                {pathname === "/landholdings" ? "" : <Link to={'/landholdings'}>Land Holdings</Link>}
                {pathname === "landholdings/create" ? "" : <Link to={'/landholdings/create'}>Create a Land Holding</Link>}
                <button id='logout-button' onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        const { pathname } = this.props.location
        return (
            <div className='nav-links'>
                {pathname === "signup" ? "" : <Link to={'/signup'}>Signup</Link>}
                {pathname === "login" ? "" : <Link to={'/login'}>Login</Link>}
            </div>
        );
      }
  }

  render() {
      return (
        <div id='nav-bar'>
            <h1><Link to='/'>Pheonix Capital Group</Link></h1>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;