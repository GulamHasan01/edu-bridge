import React from "react";
import { Link } from "react-router-dom";
import "./TechCourses.css";

const courses = [
  { name: "Full-Stack Web Development", path: "full-stack", description: "Learn HTML, CSS, JavaScript, React, and Node.js." },
  { name: "Data Science & Machine Learning", path: "data-science", description: "Python, Pandas, NumPy, Scikit-Learn, Deep Learning." },
  { name: "Cybersecurity Fundamentals", path: "cybersecurity", description: "Network Security, Ethical Hacking, Encryption, Firewalls." },
  { name: "Mobile App Development", path: "mobile-development", description: "React Native, Flutter, Swift, Kotlin for iOS & Android." },
  { name: "Cloud Computing & DevOps", path: "cloud-computing", description: "AWS, Azure, Google Cloud, Docker, Kubernetes, CI/CD." },
];

function TechCourses() {
  return (
    <div className="courses-containor">
      <h2>Tech Courses</h2>
      <div className="courses-list">
        {courses.map((course, index) => (
          <div key={index} className="course-cards">
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <Link to={`/courses/${course.path}`} className="enroll-btn">Enroll Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechCourses;
