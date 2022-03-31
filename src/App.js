import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Email from "./pages/Email";
import Chat from "./pages/Chat";
import Navbar from "./components/Navbar";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Welcome from "./components/Auth/Welcome";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ForgotPasswordVerification from "./components/Utility/ForgotPasswordVerification";
import { Auth } from 'aws-amplify';

class App extends Component {

  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null
  }

  setAuthStatus = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  setUser = user => {
    this.setState({ user: user });
  }

  async componentDidMount() {
    try {
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
      console.log(session);
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);
    } catch(error) {
      if (error !== 'No current user') {
        console.log(error);
      }
    }
    
    this.setState({ isAuthenticating: false });
  }

  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    }
    return (
      !this.state.isAuthenticating &&
      <div className="App">
        <Router>
          <div>
            <Navbar auth={authProps} />
            <Routes>
              <Route path="/home" element={<Home auth={authProps} />} />
              <Route path="/dashboard" element={<Dashboard auth={authProps} />} />
              <Route path="/email" element={<Email auth={authProps} />} />
              <Route path="/chat" element={<Chat auth={authProps} />} />
              <Route path="/login" element={<Login auth={authProps} />} />
              <Route path="/signup" element={<Signup auth={authProps} />} />
              <Route path="/welcome" element={<Welcome auth={authProps} />} />
              <Route path="/forgotpassword" element={<ForgotPassword auth={authProps} />} />
              <Route path="/forgotpasswordverification" element={<ForgotPasswordVerification auth={authProps} />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;