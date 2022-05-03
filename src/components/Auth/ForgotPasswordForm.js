import React, { Component } from 'react';
import ForgotPassword from "./ForgotPassword";
import VerificationCode from "../utility/ForgotPasswordVerification";
import Confirmation from "./ChangePasswordConfirmation";

class ForgotPasswordForm extends Component {
    state = {
        step: 1,
        email: '',
        verificationcode: '',
        newpassword: ''
      };

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        const { step, email, verificationcode, newpassword } = this.state;
        const inputValues = { email, verificationcode, newpassword };
        switch(step) {
        case 1:
            return( <ForgotPassword
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    inputValues={inputValues}
                    /> );
        case 2:
            return( <VerificationCode
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    inputValues={inputValues}
                    /> );
        case 3:
            return( <Confirmation
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    inputValues={inputValues}
                    /> );
        default: 
            return null
        }
    }
}

export default ForgotPasswordForm;