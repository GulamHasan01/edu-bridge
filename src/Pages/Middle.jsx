import React from "react";
import "./Middle.css";

const Middle = () => {
  return (
    <div className="middle-container">
      <h1>Middle School Resources (Class 6-8)</h1>
      <p>
        Explore educational resources and interactive videos for middle school students to enhance their learning experience.
      </p>

      <div className="resource-box">
        <h2>Learning Resources</h2>
        <ul>
          <li>📘 <a href="https://www.khanacademy.org/" target="_blank" rel="noopener noreferrer">Khan Academy</a></li>
          <li>📘 <a href="https://www.nationalgeographic.com/education/" target="_blank" rel="noopener noreferrer">National Geographic Education</a></li>
          <li>📘 <a href="https://www.brainpop.com/" target="_blank" rel="noopener noreferrer">BrainPOP</a></li>
          <li>📘 <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer">edX Courses</a></li>
        </ul>
      </div>

      <div className="yt-box">
        <h2>Recommended Videos</h2>
        <ul>
          <li>🎥 <a href="https://www.youtube.com/user/crashcourse" target="_blank" rel="noopener noreferrer">CrashCourse</a></li>
          <li>🎥 <a href="https://www.youtube.com/c/NationalGeographic" target="_blank" rel="noopener noreferrer">National Geographic</a></li>
          <li>🎥 <a href="https://www.youtube.com/user/veritasium" target="_blank" rel="noopener noreferrer">Veritasium</a></li>
          <li>🎥 <a href="https://www.youtube.com/c/MinuteEarth" target="_blank" rel="noopener noreferrer">MinuteEarth</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Middle;