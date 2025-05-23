import React from "react";
import "./Domain.css";
import "./CivilServices.css";

const CivilServices = () => {
  return (
    <div className="civil-services-container">
      <h1>Civil Services Preparation</h1>
      <p>
        Civil Services is one of the most prestigious career paths in India,
        requiring strategic preparation and dedication.
      </p>
      
      <div className="resource-box">
        <h2>Resources</h2>
        <ul>
          <li>📚 <a href="https://www.upsc.gov.in/examinations/syllabus" target="_blank" rel="noopener noreferrer">UPSC Syllabus</a></li>
          <li>📚 <a href="https://byjus.com/free-ias-prep/upsc-prelims-and-mains-preparation-strategy/" target="_blank" rel="noopener noreferrer">Strategy for Prelims & Mains</a></li>
          <li>📚 <a href="https://www.clearias.com/books/" target="_blank" rel="noopener noreferrer">Best Books for Preparation</a></li>
          <li>📚 <a href="https://unacademy.com/goal/upsc-civil-services-examination-ias-preparation/CHHKN" target="_blank" rel="noopener noreferrer">Interview & Personality Development</a></li>
        </ul>
      </div>

      <div className="yt-box">
        <h2>Recommended Courses</h2>
        <ul>
          <li>🎥 <a href="https://www.youtube.com/playlist?list=PLYSfY_Wp2E6PLR0pNQjFlBh_TAw0cDFvX" target="_blank" rel="noopener noreferrer">StudyIQ IAS Playlist</a></li>
          <li>🎥 <a href="https://www.youtube.com/playlist?list=PL7Qt9g27Tbi4MOmDNjNi5R4IJZPYixlN0" target="_blank" rel="noopener noreferrer">Unacademy UPSC Playlist</a></li>
          <li>🎥 <a href="https://www.youtube.com/playlist?list=PLpuxPG4TUOR6PrGdDPQQPPgpp5NQGztTf" target="_blank" rel="noopener noreferrer">BYJU'S IAS Playlist</a></li>
          <li>🎥 <a href="https://www.youtube.com/playlist?list=PLKtBa5kL6DQ0eKP2MeJRSFbYmRzvQ3J99" target="_blank" rel="noopener noreferrer">Drishti IAS YouTube Playlist</a></li>
          <li>🎥 <a href="https://www.youtube.com/playlist?list=PLXSlpXhUOLNAt1hgDCgU-ibf6aLv0zECj" target="_blank" rel="noopener noreferrer">Vision IAS YouTube Playlist</a></li>
          <li>🎥 <a href="https://www.youtube.com/playlist?list=PL63fHu6RkRZFdTXMZwDWMR_sydOBCCdqG" target="_blank" rel="noopener noreferrer">IASbaba YouTube Playlist</a></li>
          <li>🌐 <a href="https://unacademy.com/goal/upsc-civil-services-examination-ias-preparation/CHHKN" target="_blank" rel="noopener noreferrer">Unacademy UPSC Courses</a></li>
          <li>🌐 <a href="https://byjus.com/ias/" target="_blank" rel="noopener noreferrer">Byju's IAS Courses</a></li>
          <li>🌐 <a href="https://www.clearias.com/" target="_blank" rel="noopener noreferrer">ClearIAS Courses</a></li>
        </ul>
      </div>
    </div>
  );
};

export default CivilServices;
