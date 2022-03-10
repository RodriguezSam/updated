import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Email from "./pages/Email";
import Chat from "./pages/Chat";
import Data from "./pages/Data";
import Navbar from "./components/Navbar";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/email" element={<Email />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/data" element={<Data />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
      </Router>
    </Provider>
  );

}

export default App;
