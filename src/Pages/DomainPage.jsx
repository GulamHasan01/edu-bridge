import React from "react";
import { useParams } from "react-router-dom";
import "../styles.css";  // ✅ Ensure styles.css is in `src/`

const DomainPage = () => {
  const { domainName } = useParams();

  return (
    <div className="domain-container">
      <h1>{domainName} Domain</h1>
      <p>Welcome to the {domainName} learning hub! Here, you’ll find the best resources, courses, and certifications.</p>

      <h2>Top {domainName} Resources</h2>
      <ul>
        <li><a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer">Beginner Guide to {domainName}</a></li>
        <li><a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer">Advanced {domainName} Techniques</a></li>
        <li><a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer">Best Courses for {domainName}</a></li>
      </ul>
    </div>
  );
};

export default DomainPage;
