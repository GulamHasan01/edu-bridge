import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <header className="navbar">
        <h1 className="logo">
          <Link to="/">EduBridge</Link> {/* Wrapped logo inside Link */}
        </h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/tech-courses">Tech Courses</Link></li>
            <li><Link to="/non-tech-courses">Non-Tech Courses</Link></li>
            <li><Link to="/certifications">Certifications</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/UserProfile">Profile</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
