import React from "react";
import { Link } from "react-router-dom";
import "./NonTechCourses.css";

const nonTechCourses = [
  { name: "Civil Services Preparation", path: "civil-services", description: "UPSC, SSC, Banking, and State exams preparation." },
  { name: "Marketing & Digital Marketing", path: "marketing", description: "SEO, Social Media, Branding, and Advertisement strategies." },
  { name: "Finance & Accounting", path: "finance", description: "Stock market, financial management, taxation, and investments." },
  { name: "Communication & Soft Skills", path: "communication", description: "Public speaking, writing, leadership, and negotiation skills." }
];

function NonTechCourses() {
  return (
    <div className="courses-container">
      <h2>Non-Tech Courses</h2>
      <div className="courses-list">
        {nonTechCourses.map((course, index) => (
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

export default NonTechCourses;
