import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [userData] = useState({
    name: 'hassan',
    phone: '7643890242',
    email: 'ghulamhasan665@gmail.com',
    city: '-NA-',
    stream: 'CS',
    exams: 'GATE',
    xp: 0,
    highestLevel: 'NA',
    doubtsSolved: 0,
    satisfactionRate: '0%'
  });

  return (
    <div className="profile-page">
      <header className="profile-header">
        <h1>Welcome to Your Learning Profile</h1>
      </header>

      <section className="overview">
        <div className="overview-card">
          <h2>Level Up Overview</h2>
          <p><strong>Total XP:</strong> {userData.xp}</p>
          <p><strong>Highest Level:</strong> {userData.highestLevel}</p>
        </div>
      </section>

      <section className="profile-container">
        <div className="profile-card">
          <h2>Profile Details</h2>
          <button className="edit-btn">Edit</button>
          <div className="profile-section">
            <h3>Personal Details</h3>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Mobile No:</strong> {userData.phone}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Living City/Village/Town:</strong> {userData.city}</p>
          </div>

          <div className="profile-section">
            <h3>Academic Details</h3>
            <p><strong>Stream:</strong> {userData.stream}</p>
            <p><strong>Exams:</strong> {userData.exams}</p>
            <p><strong>Living City/Village/Town:</strong> {userData.city}</p>
          </div>
        </div>

        <div className="performance-card">
          <h2>Performance as Doubt Solver</h2>
          <p><strong>Total Doubts Solved:</strong> {userData.doubtsSolved}</p>
          <p><strong>Satisfactory Rate:</strong> {userData.satisfactionRate}</p>
          <button className="know-more-btn">Know more</button>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
