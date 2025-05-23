import React from "react";
import "./Domain.css";
import "./Communication.css";

const Communication = () => {
  return (
    <div className="communication-container">
      <h1>Communication Skills</h1>
      <p>
        Communication skills are vital for conveying information effectively, whether in personal interactions or professional settings. It includes verbal, non-verbal, and written communication.
      </p>

      {/* Resource Section */}
      <div className="resource-box">
        <h2>Recommended Resources</h2>
        <ul>
          <li>🔥 <a href="https://www.coursera.org/courses?query=communication%20skills" target="_blank" rel="noopener noreferrer">Coursera - Communication Courses</a></li>
          <li>🔥 <a href="https://www.udemy.com/courses/search/?q=communication%20skills" target="_blank" rel="noopener noreferrer">Udemy - Communication Skills</a></li>
          <li>🔥 <a href="https://www.edx.org/learn/communication" target="_blank" rel="noopener noreferrer">edX - Communication Skills</a></li>
          <li>🔥 <a href="https://www.linkedin.com/learning/topics/communication-skills" target="_blank" rel="noopener noreferrer">LinkedIn Learning</a></li>
        </ul>
      </div>

      {/* Video Section */}
      <div className="yt-box">
        <h2>Recommended YouTube Playlists</h2>
        <ul>
          <li>🎥 <a href="https://www.youtube.com/playlist?list=PLcQCEG_o1J7f9HB9I_6VoYZyrq9YjYaXU" target="_blank" rel="noopener noreferrer">Improve Public Speaking</a></li>
          <li>🎥 <a href="https://www.youtube.com/playlist?list=PLKpTBc3krSzPtugXb0qLIOeaf0i2Z1vG8" target="_blank" rel="noopener noreferrer">Effective Business Communication</a></li>
          <li>🎥 <a href="https://www.youtube.com/playlist?list=PL2-UMNdf9CrnsYO_xDjWSh8-J4DHJP18H" target="_blank" rel="noopener noreferrer">Master Interpersonal Skills</a></li>
          <li>🎥 <a href="https://www.youtube.com/playlist?list=PLlO8FtA8cO2qk0EZBrQJcFDuKrHV8WCC6" target="_blank" rel="noopener noreferrer">Writing Skills for Success</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Communication;