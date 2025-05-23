import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <header className="navbar">
        <h1 className="logo">EduBridge</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section className="about-section">
        <h2>About Us</h2>
        <p>EduBridge is committed to providing high-quality educational resources. Our mission is to bridge the gap between knowledge seekers and structured learning.</p>
        <p>We offer curated courses, certification details, and learning materials to help students, professionals, and enthusiasts grow.</p>
        <Link to="/contact" className="btn">Get in Touch</Link>
      </section>
    </div>
  );
};

export default About;
