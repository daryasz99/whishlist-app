import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// صفحات مختلف
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from ".//Dashboard";
import UserProfile from "./UserProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users/:username" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
