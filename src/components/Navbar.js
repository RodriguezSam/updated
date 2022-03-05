import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="container-fluid navbar-inverse">
     <nav>
      <div class="navbar-header">
        <Link to ="/Teampage" class="navbar-brand">Team Agone</Link>
      </div>
      {/*// -- make a list of the navbar elements that
          // will be displayed on the left of the navbar
          - glyphicon-_____ includes the icon to the left of the nav link
          - <Link> is a react router component that routes to the desired page
      // -->
      */}
      <ul class="nav navbar-nav">
        <li><Link to="/Home"><span class="glyphicon glyphicon-home"></span> Home</Link></li>
        <li><Link to="/Email"><span class="glyphicon glyphicon-envelope"></span> Email</Link></li>
        <li><Link to="/Chat"><span class="glyphicon glyphicon-user"></span> Open Chat</Link></li>
      </ul>

       {/* on the right hand side of the navbar sign up and login are
           incorporated to allow for:
             - return users logging in to view data (i.e. as coach or athlete)
               or upload data (as athlete)
             - people who have received an onboarding email from the
               coach to sign up for an account in the team wellness portal
             - class glyphicon glyphicon-______ is a way of importing
              icons from the glyphicons haffling set (kind of like an icon library)
       */}
      <ul class="nav navbar-nav navbar-right">
        <li><Link to="/Login"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
        <li><Link to="/Login/Login"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
      </ul>
    </nav>
   </div>
    );
}
export default Navbar;