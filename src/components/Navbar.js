import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import "../App.css";

export default class Navbar extends Component {
  handleLogOut = async event => {
    event.preventDefault();
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);

    }catch(error) {
      console.log(error.message);
    }
  }

  render() {
    return (
      <nav className='nav navbar-inverse'>
          <div class="navbar-header">
            <Link className='navbar-brand' to='/'>Team Success Portal</Link>
          </div>
          
          <ul class="nav navbar-nav right">
            <li className='nav-item'>
              <Link to="/home"><span class="glyphicon glyphicon-home"></span> Home</Link>
            </li>
              {this.props.auth.isAuthenticated && this.props.auth.user && (
                <li className='nav nav-item'>
                  <Link to="#">Hello {this.props.auth.user.username}</Link>
                </li>
                )}
              {!this.props.auth.isAuthenticated && (
                <>
                  <li className='nav-item'>
                    <Link to='/signup'><span class="glyphicon glyphicon-user"></span> Sign Up</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/login'><span class="glyphicon glyphicon-log-in"></span> Login</Link>
                  </li>
                </>
                )}
              {this.props.auth.isAuthenticated && (
                <>
                <li className='nav-item'>
                  <Link to="/Dashboard"><span class="glyphicon glyphicon-signal"></span> Dashboard</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/Email"><span class="glyphicon glyphicon-envelope"></span> Email</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/Chat"><span class="glyphicon glyphicon-comment"></span> Chat</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/login' onClick={this.handleLogOut}>Logout</Link>
                </li>
                </>
              )} 
          </ul>
        </nav>
    )
  }
}
          