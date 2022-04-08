import React, { Component } from "react";
import {Link} from "react-router-dom";

class ChangePasswordConfirmation extends Component {

  render() {
    return (
      <section className="forgotpwBack">
        <div className="forgotpwCard" >
        <div className="centerSubmit">
          <h1>Password Submission</h1>
          <p>Your password has been successfully updated!</p>
          <p> <Link className='loginLink' to="/Login">Click Here</Link> to login into your count</p>
        </div>
        </div>
      </section>
    );
  }
}

export default ChangePasswordConfirmation;