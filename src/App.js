import React from "react";
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teampage from "./pages/Teampage";
import Home from "./pages/Home";
import Email from "./pages/Email";
import Chat from "./pages/Chat";
import Navbar from "./components/Navbar";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/teampage" element={<Teampage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/email" element={<Email />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/Login/Login" element={<Login />} />
       </Routes>
     </div>
    </Router>
  );

}

export default App;
