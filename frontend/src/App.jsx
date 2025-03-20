import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import GoogleLogin from "./component/GoogleLogin";
import Dashboard from "./component/Dashboard";
import PageNot404 from "./component/PageNot404";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  // google wrapper for clientd it is uded by GoogleOAuthProvider
  const GoogleWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="992406871487-2aerdtmf4034pe2qq2aqc8c1e1ij6q1j.apps.googleusercontent.com">
        <GoogleLogin></GoogleLogin>
      </GoogleOAuthProvider>
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<GoogleWrapper />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<PageNot404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
