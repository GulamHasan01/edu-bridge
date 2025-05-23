import React from "react";
import "./HigherSecondary.css";

const HigherSecondary = () => {
  return (
    <div className="higher-secondary-container">
      <h1>Higher Secondary School Resources (Class 11-12)</h1>
      <p>
        Get access to top-quality learning resources and preparation material for competitive exams.
      </p>

      <div className="resource-box">
        <h2>Learning Resources</h2>
        <ul>
          <li>📘 <a href="https://www.khanacademy.org/math" target="_blank" rel="noopener noreferrer">Khan Academy Mathematics</a></li>
          <li>📘 <a href="https://ncert.nic.in/textbook.php" target="_blank" rel="noopener noreferrer">NCERT Textbooks</a></li>
          <li>📘 <a href="https://www.unacademy.com" target="_blank" rel="noopener noreferrer">Unacademy Live Classes</a></li>
          <li>📘 <a href="https://www.embibe.com" target="_blank" rel="noopener noreferrer">Embibe Exam Prep</a></li>
        </ul>
      </div>

      <div className="yt-box">
        <h2>Recommended Videos</h2>
        <ul>
          <li>🎥 <a href="https://www.youtube.com/c/PhysicsWallah" target="_blank" rel="noopener noreferrer">Physics Wallah</a></li>
          <li>🎥 <a href="https://www.youtube.com/c/VedantuJEE" target="_blank" rel="noopener noreferrer">Vedantu JEE</a></li>
          <li>🎥 <a href="https://www.youtube.com/c/UnacademyNEET" target="_blank" rel="noopener noreferrer">Unacademy NEET</a></li>
          <li>🎥 <a href="https://www.youtube.com/c/MathsInfinity" target="_blank" rel="noopener noreferrer">Maths Infinity</a></li>
        </ul>
      </div>
    </div>
  );
};

export default HigherSecondary;
