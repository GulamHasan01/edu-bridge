import React from "react";
import "./Secondary.css";

const Secondary = () => {
  return (
    <div className="secondary-container">
      <h1>Secondary School Resources (Class 9-10)</h1>
      <p>
        Explore subject-wise resources to strengthen your concepts and prepare for exams efficiently.
      </p>

      <div className="resource-box">
        <h2>Learning Resources</h2>
        <ul>
          <li>📘 <a href="https://www.khanacademy.org/science" target="_blank" rel="noopener noreferrer">Khan Academy Science</a></li>
          <li>📘 <a href="https://ncert.nic.in/textbook.php" target="_blank" rel="noopener noreferrer">NCERT Textbooks</a></li>
          <li>📘 <a href="https://www.byjus.com/free-icse-cbse-ncert-solutions/" target="_blank" rel="noopener noreferrer">Byju's Free Solutions</a></li>
          <li>📘 <a href="https://www.toppr.com" target="_blank" rel="noopener noreferrer">Toppr Learning Platform</a></li>
        </ul>
      </div>

      <div className="yt-box">
        <h2>Recommended Videos</h2>
        <ul>
          <li>🎥 <a href="https://www.youtube.com/c/KhanAcademy" target="_blank" rel="noopener noreferrer">Khan Academy</a></li>
          <li>🎥 <a href="https://www.youtube.com/c/Vedantu" target="_blank" rel="noopener noreferrer">Vedantu Classes</a></li>
          <li>🎥 <a href="https://www.youtube.com/c/EduMantra" target="_blank" rel="noopener noreferrer">EduMantra</a></li>
          <li>🎥 <a href="https://www.youtube.com/c/PhysicsWallah" target="_blank" rel="noopener noreferrer">Physics Wallah</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Secondary;
