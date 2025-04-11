import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// صفحات مختلف
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import Dashboard from "./page/Dashboard";
import UserProfile from "./page/UserProfile";

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
