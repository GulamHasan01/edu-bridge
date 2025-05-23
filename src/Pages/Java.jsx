import React from "react";
import "./Domain.css";
import "./Java.css";

const Java = () => {
  return (
    <div className="java-container">
      <h1>Java Programming</h1>
      <p>
        Java is a high-level, class-based, object-oriented programming language
        that is widely used for building enterprise applications, mobile apps, and more.
      </p>
      
      <div className="resource-box">
        <h2>Java Learning Resources</h2>
        <ul>
          <li>🔥 <a href="https://docs.oracle.com/javase/tutorial/" target="_blank" rel="noopener noreferrer">Official Java Tutorials</a></li>
          <li>🔥 <a href="https://www.javatpoint.com/java-tutorial" target="_blank" rel="noopener noreferrer">JavaTpoint Java Tutorial</a></li>
          <li>🔥 <a href="https://www.w3schools.com/java/" target="_blank" rel="noopener noreferrer">W3Schools Java Tutorial</a></li>
          <li>🔥 <a href="https://www.geeksforgeeks.org/java/" target="_blank" rel="noopener noreferrer">GeeksforGeeks Java Articles</a></li>
        </ul>
      </div>
      
      <div className="yt-box">
        <h2>Java Video Courses</h2>
        <ul>
          <li>🎥 <a href="https://www.youtube.com/watch?v=eIrMbAQSU34" target="_blank" rel="noopener noreferrer">Programming with Mosh - Java Full Course</a></li>
          <li>🎥 <a href="https://www.youtube.com/watch?v=grEKMHGYyns" target="_blank" rel="noopener noreferrer">freeCodeCamp.org - Java for Beginners</a></li>
          <li>🎥 <a href="https://www.youtube.com/watch?v=A74TOX803D0" target="_blank" rel="noopener noreferrer">Telusko - Complete Java Course</a></li>
          <li>🎥 <a href="https://www.youtube.com/watch?v=xk4_1vDrzzo" target="_blank" rel="noopener noreferrer">Bro Code - Java Crash Course</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Java;
