import React from "react";
import "./Domain.css";


const Cpp = () => {
  return (
    <div className="domain-container">
      <h1>C++ Programming</h1>
      <p>
        C++ is a powerful programming language used in game development, 
        system programming, and competitive coding.
      </p>

      {/* Resource Section */}
      <div className="resource-box">
        <h2>Resources for Learning C++</h2>
        <ul>
          <li>🚀 <a href="https://www.learncpp.com/" target="_blank" rel="noopener noreferrer">LearnCpp.com</a></li>
          <li>🚀 <a href="https://cplusplus.com/doc/tutorial/" target="_blank" rel="noopener noreferrer">C++ Official Tutorial</a></li>
          <li>🚀 <a href="https://www.geeksforgeeks.org/c-plus-plus/" target="_blank" rel="noopener noreferrer">GeeksforGeeks C++</a></li>
          <li>🚀 <a href="https://www.udemy.com/course/free-learn-c-tutorial-beginners/" target="_blank" rel="noopener noreferrer">Udemy C++ Course</a></li>
        </ul>
      </div>

      {/* YouTube Section */}
      <div className="yt-box">
        <h2>Recommended YouTube Channels</h2>
        <ul>
          <li>🎥 <a href="https://www.youtube.com/playlist?list=PLAE85DE8440AA6B83" target="_blank" rel="noopener noreferrer">MyCodeSchool C++ Playlist</a></li>
          <li>🎥 <a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" target="_blank" rel="noopener noreferrer">Apna College C++</a></li>
          <li>🎥 <a href="https://www.youtube.com/playlist?list=PLrClazTqVpJfIqd32e3VUZnZMeXt5JbEa" target="_blank" rel="noopener noreferrer">CodeWithHarry C++</a></li>
          <li>🎥 <a href="https://www.youtube.com/playlist?list=PL6plRXMq5RAUYM5L5woQB4gJKnXJqj4lP" target="_blank" rel="noopener noreferrer">FreeCodeCamp C++</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Cpp;