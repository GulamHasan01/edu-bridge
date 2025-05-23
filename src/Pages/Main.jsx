import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <h1>Welcome to EduBridge</h1>
      <p>Your gateway to quality education.</p>
      <div className="buttons">
        <Link to="/home">
          <button className="btn">Go to Home</button>
        </Link>
        <Link to="/about">
          <button className="btn">About Us</button>
        </Link>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
