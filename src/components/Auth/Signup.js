import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../Utility/FormValidation";
import { Auth } from "aws-amplify";


class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    errors: {
      cognito: null,
      blankfield: false,
      passwordmatch: false
    }
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false
      }
    });
  }

  handleSubmit = async event => {
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
    const { username, email, password } = this.state;
    try {
      const signUpResponse = await Auth.signUp({
        username,
        password,
        attributes: {
          email: email
        }
      });
      this.props.history.push("/welcome");
      console.log(signUpResponse);
    } catch (error) {
      let err = null;
      !error.message ? err = { "message": error } : err = error;
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err
        }
      });
    }
  }

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  render() {
    return (
      <section className="register-design">
          <div className="signupSection">
            <h1>Signup Here</h1>
            <FormErrors formerrors={this.state.errors} />

            <form onSubmit={this.handleSubmit}>
              <div className='section'>
                <h2>Welcome to the Team Success Portal!</h2>
                <div className="field">
                  <p className="control">
                    <input 
                      className="input" 
                      type="text"
                      id="username"
                      aria-describedby="userNameHelp"
                      placeholder="Enter username"
                      value={this.state.username}
                      onChange={this.onInputChange}
                    />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <input 
                      className="input" 
                      type="email"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.onInputChange}
                    />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <input 
                      className="input" 
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.onInputChange}
                    />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <input 
                      className="input" 
                      type="password"
                      id="confirmpassword"
                      placeholder="Confirm password"
                      value={this.state.confirmpassword}
                      onChange={this.onInputChange}
                    />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <a href="/forgotpasswordform">Forgot password?</a>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button className="button is-success formFieldButton">
                      Sign Up
                    </button>
                  </p>
                </div>
              </div>
           </form>
          </div>
      </section>
    );
  }
}

export default Signup;