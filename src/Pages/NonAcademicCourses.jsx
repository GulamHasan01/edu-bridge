import React from "react";
import "./NonAcademicCourses.css"; // Optional: Add styles for this page

const NonAcademicCourses = () => {
  const nonAcademicContent = [
    {
      title: "Space Exploration",
      description: "Learn about the latest advancements in space exploration and astronomy.",
      link: "https://www.nasa.gov",
    },
    {
      title: "Artificial Intelligence Research",
      description: "Explore cutting-edge research in AI and machine learning.",
      link: "https://openai.com",
    },
    {
      title: "Quantum Computing",
      description: "Discover the future of computing with quantum technology.",
      link: "https://www.ibm.com/quantum-computing",
    },
    {
      title: "Climate Change Technologies",
      description: "Understand innovative solutions to combat climate change.",
      link: "https://www.ipcc.ch",
    },
    {
      title: "Biotechnology Innovations",
      description: "Learn about breakthroughs in biotechnology and genetic engineering.",
      link: "https://www.nature.com/biotech",
    },
  ];

  return (
    <div className="non-academic-container">
      <h1>Explore Non-Academic Courses</h1>
      <p>Discover fascinating topics beyond traditional academics.</p>
      <div className="content-grid">
        {nonAcademicContent.map((item, index) => (
          <div key={index} className="content-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NonAcademicCourses;