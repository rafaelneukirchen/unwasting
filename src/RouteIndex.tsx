import React from "react";
import { Routes, Route } from "react-router-dom";
import ChangePass from "./pages/ChangePass";
import Login from "./pages/Login";
import Register from "./pages/Register";

const RouteIndex: React.FC = () => {
  return (
    <Routes>
      {/* Not Logged */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/change-password" element={<ChangePass />} />

      {/* Logged */}
      <Route path="/home" element={<ChangePass />} />
    </Routes>
  );
};

export default RouteIndex;
