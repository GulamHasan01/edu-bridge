import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo & About */}
        <div className="footer-section about">
          <h2>EduBridge</h2>
          <p>Connecting learners with quality education and resources for a better future.</p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/tech-courses">Tech Courses</Link></li>
            <li><Link to="/non-tech-courses">Non-Tech Courses</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Right Section - Contact & Social Media */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@edubridge.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: New Delhi, India</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer - Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EduBridge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
