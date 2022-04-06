import React, { Component } from "react";

class ChangePasswordConfirmation extends Component {

  render() {
    return (
      <section className="section forgotpwCard">
        <div className="forgotpwBack" >
        <div className="container">
          <h1>Password Submission</h1>
          <p>Your password has been successfully updated!</p>
        </div>
        <p> Click here to login into </p>
        </div>
      </section>
    );
  }
}

export default ChangePasswordConfirmation;