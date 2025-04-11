import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// صفحات مختلف
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";

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
