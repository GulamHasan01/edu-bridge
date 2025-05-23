import React from "react";
import "./Primary.css";

const Primary = () => {
  return (
    <div className="primary-container">
      <h1>Primary School Resources (Class 1-5)</h1>
      <p>
        Explore interactive resources and videos to make learning fun and engaging for young learners.
      </p>

      <div className="resource-box">
        <h2>Learning Resources</h2>
        <ul>
          <li>📘 <a href="https://www.education.com/worksheets/" target="_blank" rel="noopener noreferrer">Printable Worksheets</a></li>
          <li>📘 <a href="https://www.khanacademy.org/kids" target="_blank" rel="noopener noreferrer">Khan Academy Kids</a></li>
          <li>📘 <a href="https://www.splashlearn.com/" target="_blank" rel="noopener noreferrer">SplashLearn Math & Reading</a></li>
          <li>📘 <a href="https://www.starfall.com/" target="_blank" rel="noopener noreferrer">Starfall Educational Games</a></li>
        </ul>
      </div>

      <div className="yt-box">
        <h2>Recommended Videos</h2>
        <ul>
          <li>🎥 <a href="https://www.youtube.com/c/KidsLearningTube" target="_blank" rel="noopener noreferrer">Kids Learning Tube</a></li>
          <li>🎥 <a href="https://www.youtube.com/c/SciShowKids" target="_blank" rel="noopener noreferrer">SciShow Kids</a></li>
          <li>🎥 <a href="https://www.youtube.com/c/Cocomelon" target="_blank" rel="noopener noreferrer">Cocomelon Educational Songs</a></li>
          <li>🎥 <a href="https://www.youtube.com/c/NationalGeographicKids" target="_blank" rel="noopener noreferrer">NatGeo Kids</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Primary;