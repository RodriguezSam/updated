import React, { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const Navbar = ({ logout, isAuthenticated }) => {
  const [redirect, setRedirect] = useState(false);

  const logout_user = () => {
    logout();
    setRedirect(true);
  };

  const guestLinks = () => (
      <Fragment>
        {/* The guest links defined here will
          only be shown when the user is not 
          authenticated to provide further security
          for sensitive athlete information 
          */}
          <li className='nav-item'>
              <Link to='/login'><span class="glyphicon glyphicon-user"></span> Login</Link>
          </li>
          <li className='nav-item'>
              <Link to='/signup'><span class="glyphicon glyphicon-user"></span> Sign Up</Link>
          </li>
      </Fragment>
    );


    const authLinks = () => (
      
      <>
         {/*// -- make a list of the navbar elements that
               will be displayed on the navbar when the 
               user is authenticated
          - glyphicon-_____ includes the icon to the left of the nav link
          - <Link> is a react router component that routes to the desired page
          */}
        <li className='nav-item'>
         <Link to="/Home"><span class="glyphicon glyphicon-home"></span> Home</Link>
        </li>
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
            <a className='nav-link' href='#!' onClick={logout_user}>Logout</a>
        </li>
        <li className='nav-item'>
        <Link to="/Data"><span class="glyphicon glyphicon-stats"></span> Data</Link>
        </li></>
  );
  

  return (
    <Fragment>
      <div class="container-fluid navbar-inverse">
        <nav>
          <div class="navbar-header">
            <Link className='navbar-brand' to='/'>Team Success Portal</Link>
          </div>
          
          <ul class="nav navbar-nav ml-auto">
            <li>
              <Link className='nav-link' to='/'><span className='glyphicon glyphicon-home'></span> Home</Link>
            </li>
            {isAuthenticated ? authLinks() : guestLinks()}
          </ul>
        </nav>
        {redirect ? <Navigate to='/' /> : <Fragment></Fragment>}
      </div>
    </Fragment>
    );
};


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);