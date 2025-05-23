import React from 'react';
import './Certifications.css';

const freeCourses = {
  tech: [
    { name: "C Programming Basics", provider: "Udacity", year: "2024", link: "https://www.udacity.com/course/c-programming--cd13409" },
    { name: "C++ for Beginners", provider: "CodeAcademy", year: "2023", link: "https://www.codecademy.com/learn/learn-c-plus-plus" },
    { name: "Java Programming", provider: "Coursera", year: "2023", link: "https://www.coursera.org/learn/java-programming" },
    { name: "Python for Data Science", provider: "Google", year: "2024", link: "https://developers.google.com/learn/pathways/data-science-with-python" },
    { name: "MySQL Database Management", provider: "Khan Academy", year: "2024", link: "https://www.khanacademy.org/computing/computer-programming/sql" },
    { name: "Full Stack Web Development", provider: "Coursera", year: "2023", link: "https://www.coursera.org/specializations/full-stack-react" },
    { name: "Data Science & Machine Learning", provider: "Udemy", year: "2024", link: "https://www.udemy.com/course/data-science-and-machine-learning-bootcamp-with-r" },
    { name: "Cyber Security Essentials", provider: "Cisco", year: "2024", link: "https://www.netacad.com/courses/cybersecurity/intro-cybersecurity" },
    { name: "Cloud Computing & AWS", provider: "Amazon", year: "2023", link: "https://aws.amazon.com/training/" },
    { name: "Mobile App Development", provider: "Google", year: "2023", link: "https://developers.google.com/learn/pathways/android-development" }
  ],
  nonTech: [
    { name: "Civil Services Preparation", provider: "UPSC Academy", year: "2024", link: "https://www.upsc.gov.in/" },
    { name: "Marketing & Digital Marketing", provider: "HubSpot", year: "2023", link: "https://academy.hubspot.com/courses" },
    { name: "Finance & Accounting", provider: "CFA Institute", year: "2023", link: "https://www.cfainstitute.org/en/programs/cfa" },
    { name: "Communication & Soft Skills", provider: "Harvard Online", year: "2022", link: "https://online-learning.harvard.edu/subject/business" }
  ],
  additional: [
    { name: "Artificial Intelligence Specialist", provider: "MIT", year: "2024", link: "https://professional.mit.edu/course-catalog/artificial-intelligence" },
    { name: "Blockchain Development", provider: "IBM", year: "2024", link: "https://www.ibm.com/services/learning/" },
    { name: "Ethical Hacking", provider: "EC-Council", year: "2023", link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/" }
  ]
};

const paidCourses = {
  tech: [
    { name: "Advanced Java Programming", provider: "Udemy", price: "₹3499", link: "https://www.udemy.com/course/advanced-java-programming/" },
    { name: "Mastering C++", provider: "Pluralsight", price: "₹4199", link: "https://www.pluralsight.com/courses/cplusplus-advanced" },
    { name: "Python for AI & ML", provider: "MIT", price: "₹29999", link: "https://professional.mit.edu/course-catalog/python-ai-ml" },
    { name: "Cyber Security Essentials", provider: "Cisco", price: "₹4599", link: "https://www.netacad.com/courses/cybersecurity/cybersecurity-essentials" },
    { name: "Cloud Computing & AWS", provider: "Amazon", price: "₹8499", link: "https://aws.amazon.com/training/learn-about/cloud-computing/" },
    { name: "Data Science & Machine Learning", provider: "Udacity", price: "₹91999", link: "https://www.udacity.com/course/data-scientist-nanodegree--nd025" },
    { name: "Mobile App Development", provider: "Google", price: "₹18999", link: "https://developers.google.com/certification/mobile-web-specialist" }
  ],
  nonTech: [
    { name: "Civil Services Preparation", provider: "UPSC Academy", price: "₹29999", link: "https://www.upsc.gov.in/" },
    { name: "Marketing & Digital Marketing", provider: "HubSpot", price: "₹15999", link: "https://academy.hubspot.com/courses" },
    { name: "Finance & Accounting", provider: "CFA Institute", price: "₹41999", link: "https://www.cfainstitute.org/en/programs/cfa" },
    { name: "Communication & Soft Skills", provider: "Harvard Online", price: "₹11999", link: "https://online-learning.harvard.edu/subject/business" }
  ],
  additional: [
    { name: "Artificial Intelligence Specialist", provider: "MIT", price: "₹84999", link: "https://professional.mit.edu/course-catalog/artificial-intelligence" },
    { name: "Blockchain Development", provider: "IBM", price: "₹72999", link: "https://www.ibm.com/services/learning/" },
    { name: "Ethical Hacking", provider: "EC-Council", price: "₹64999", link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/" }
  ]
};

function CourseSection({ title, courses }) {
  return (
    <div className="course-category">
      <h3>{title}</h3>
      <ul className="certifications-list">
        {courses.map((course, index) => (
          <li key={index} className="cert-card">
            <h4>
              <a href={course.link} target="_blank" rel="noopener noreferrer">
                {course.name}
              </a>
            </h4>
            <p><strong>Provider:</strong> {course.provider}</p>
            {course.year ? (
              <p><strong>Year:</strong> {course.year}</p>
            ) : (
              <p><strong>Price:</strong> {course.price}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Certifications() {
  return (
    <div className="certifications-container">
      <h2>Certifications & Courses</h2>

      {/* Free Courses Section */}
      <div className="course-section">
        <h3>🎓 Free Courses</h3>
        <div className="course-wrapper">
          <CourseSection title="📌 Tech Courses" courses={freeCourses.tech} />
          <CourseSection title="📌 Non-Tech Courses" courses={freeCourses.nonTech} />
          <CourseSection title="📌 Additional Certifications" courses={freeCourses.additional} />
        </div>
      </div>

      {/* Paid Courses Section */}
      <div className="course-section paid">
        <h3>💰 Paid Courses</h3>
        <div className="course-wrapper">
          <CourseSection title="📌 Tech Courses" courses={paidCourses.tech} />
          <CourseSection title="📌 Non-Tech Courses" courses={paidCourses.nonTech} />
          <CourseSection title="📌 Additional Certifications" courses={paidCourses.additional} />
        </div>
      </div>
    </div>
  );
}

export default Certifications;
