import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  // Default domains
  const defaultTechDomains = ["Java", "CPlusPlus", "Python", "Web Development"];
  const defaultNonTechDomains = ["CivilService", "Marketing", "Finance", "Communication"];

  // Load stored domains from localStorage, ensuring default domains are included
  const getStoredDomains = (key, defaultValues) => {
    const savedData = JSON.parse(localStorage.getItem(key)) || [];
    return Array.from(new Set([...defaultValues, ...savedData])); // Ensure defaults are always present
  };

  const [techDomains, setTechDomains] = useState(() => getStoredDomains("techDomains", defaultTechDomains));
  const [nonTechDomains, setNonTechDomains] = useState(() => getStoredDomains("nonTechDomains", defaultNonTechDomains));

  // Update localStorage whenever domains change
  useEffect(() => {
    localStorage.setItem("techDomains", JSON.stringify(techDomains));
  }, [techDomains]);

  useEffect(() => {
    localStorage.setItem("nonTechDomains", JSON.stringify(nonTechDomains));
  }, [nonTechDomains]);

  // Function to add a new domain
  const addDomain = (type) => {
    const newDomain = prompt(`Enter the name of the new ${type} domain:`)?.trim();
    if (newDomain) {
      if (type === "Tech") {
        if (!techDomains.includes(newDomain)) {
          setTechDomains([...techDomains, newDomain]);
        } else {
          alert("This domain already exists in Tech Courses!");
        }
      } else {
        if (!nonTechDomains.includes(newDomain)) {
          setNonTechDomains([...nonTechDomains, newDomain]);
        } else {
          alert("This domain already exists in Non-Tech Courses!");
        }
      }
    }
  };

  // Function to remove a domain (prevents deletion of default domains)
  const removeDomain = (type, domain) => {
    if ((type === "Tech" && defaultTechDomains.includes(domain)) ||
        (type === "Non-Tech" && defaultNonTechDomains.includes(domain))) {
      alert("Default domains cannot be removed!");
      return;
    }

    if (type === "Tech") {
      setTechDomains(techDomains.filter((item) => item !== domain));
    } else {
      setNonTechDomains(nonTechDomains.filter((item) => item !== domain));
    }
  };

  return (
    <div className="home-container">
      <section className="hero">
        <h2>Bridge the Gap to Quality Education</h2>
        <p>Find structured courses, certifications, and learning materials all in one place.</p>
        <a href="/non-academic-courses" className="btn">Explore Non-Academic Courses</a>
      </section>

      {/* Tech Courses Section */}
      <section id="tech-courses" className="courses">
        <h2>Tech Courses</h2>
        <div className="course-grid">
          {techDomains.map((course, index) => (
            <div key={index} className="course-card">
              <Link to={`/${course.toLowerCase().replace(/ /g, "-")}`}>
                <button className="domain-btn">{course}</button>
              </Link>
              <button className="remove-btn" onClick={() => removeDomain("Tech", course)}>X</button>
            </div>
          ))}
        </div>
        <button className="add-btn" onClick={() => addDomain("Tech")}>+ Add Tech Domain</button>
      </section>

      {/* Non-Tech Courses Section */}
      <section id="non-tech-courses" className="courses">
        <h2>Non-Tech Courses</h2>
        <div className="course-grid">
          {nonTechDomains.map((course, index) => (
            <div key={index} className="course-card">
              <Link to={`/${course.toLowerCase().replace(/ /g, "-")}`}>
                <button className="domain-btn">{course}</button>
              </Link>
              <button className="remove-btn" onClick={() => removeDomain("Non-Tech", course)}>X</button>
            </div>
          ))}
        </div>
        <button className="add-btn" onClick={() => addDomain("Non-Tech")}>+ Add Non-Tech Domain</button>
      </section>

      {/* School Students Section */}
      <div>
        <h1>Welcome to EduSchool</h1>
        <div className="school-students-section">
          <h2>Resources for School Students</h2>
          <p>Select your class category to explore study materials and courses:</p>
          <div className="class-categories">
            <Link to="/primary"><button>Primary (Class 1-5)</button></Link>
            <Link to="/middle"><button>Middle (Class 6-8)</button></Link>
            <Link to="/secondary"><button>Secondary (Class 9-10)</button></Link>
            <Link to="/higher-secondary"><button>Higher Secondary (Class 11-12)</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
