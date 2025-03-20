import React from "react";
import { useNavigate } from "react-router-dom";
import "./PageNot404.css";
const PageNot404 = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      404 Page Not Found
      <button className="btn" onClick={() => navigate("/login")}>
        Login Page
      </button>
    </div>
  );
};

export default PageNot404;
