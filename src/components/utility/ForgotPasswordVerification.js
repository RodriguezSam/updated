import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "./FormValidation";
import { Auth } from 'aws-amplify';

class ForgotPasswordVerification extends Component {
  state = {
    verificationcode: "",
    email: "",
    newpassword: "",
    errors: {
      cognito: null,
      blankfield: false
    }
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  };

  passwordVerificationHandler = async event => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }

    // AWS Cognito integration here
    try {
      await Auth.forgotPasswordSubmit(
        this.state.email,
        this.state.verificationcode,
        this.state.newpassword
      );
      this.props.nextStep();
    }catch(error) {
      console.log(error);
    }
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  render() {
    return (
      <section className="">
        <div className="forgotpwBack" >
        <div className="forgotpwCard">
          <h1>Set your new password</h1>
          <p>
            Please enter the verification code sent to your email address below,
            your email address and a new password.
          </p>
          <FormErrors formerrors={this.state.errors} />

          <form onSubmit={this.passwordVerificationHandler}>
            <div className="field">
              <p className="control">
                <input
                  type="text"
                  className="input forgotInput"
                  id="verificationcode"
                  aria-describedby="verificationCodeHelp"
                  placeholder="Enter verification code"
                  value={this.state.verificationcode}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <input 
                  className="input forgotInput" 
                  type="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email"
                  value={this.state.email}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <input
                  type="password"
                  className="input forgotInput"
                  id="newpassword"
                  placeholder="New password"
                  value={this.state.newpassword}
                  onChange={this.onInputChange}
                />
              </p>
            <div className="field">
                <p className="control">
                  <input 
                    className="input forgotInput" 
                    type="password"
                    id="confirmpassword"
                    placeholder="Confirm password"
                    value={this.state.confirmpassword}
                    onChange={this.onInputChange}
                  />
                </p>
              </div>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success nextButton">
                  Submit
                </button>
              </p>
            </div>
          </form>
        </div>
        </div>
      </section>
    );
  }
}

export default ForgotPasswordVerification;