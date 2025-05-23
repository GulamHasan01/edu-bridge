import React, { useEffect,  Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

const Signup = React.lazy(() => import("./Pages/Signup"));

// Lazy-loaded components
const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const TechCourses = React.lazy(() => import("./Pages/tech-courses"));
const NonTechCourses = React.lazy(() => import("./Pages/NonTechCources"));
const Certifications = React.lazy(() => import("./Pages/Certifications"));
const UserProfile = React.lazy(() => import("./Pages/UserProfile"));

// Tech Courses
const FullStack = React.lazy(() => import("./Pages/Courses/FullStack"));
const DataScience = React.lazy(() => import("./Pages/Courses/DataScience"));
const CyberSecurity = React.lazy(() => import("./Pages/Courses/CyberSecurity"));
const MobileDev = React.lazy(() => import("./Pages/Courses/MobileDev"));
const CloudComputing = React.lazy(() => import("./Pages/Courses/CloudComputing"));

// Non-Tech Courses
const CivilServices = React.lazy(() => import("./Pages/Courses/CivilServices"));
const Marketting = React.lazy(() => import("./Pages/Courses/Marketing"));
const Finances = React.lazy(() => import("./Pages/Courses/Finance"));
const Communications = React.lazy(() => import("./Pages/Courses/Communication"));

// School
const NonAcademicCourses = React.lazy(() => import("./Pages/NonAcademicCourses"));
const Primary = React.lazy(() => import("./Pages/Primary"));
const Middle = React.lazy(() => import("./Pages/Middle"));
const Secondary = React.lazy(() => import("./Pages/Secondary"));
const HigherSecondary = React.lazy(() => import("./Pages/HigherSecondary"));

// Domain pages
const Java = React.lazy(() => import("./Pages/Java"));
const CPlusPlus = React.lazy(() => import("./Pages/CPlusPlus"));
const Python = React.lazy(() => import("./Pages/Python"));
const WebDevelopment = React.lazy(() => import("./Pages/WebDevelopment"));
const CivilService = React.lazy(() => import("./Pages/CivilService"));
const Marketing = React.lazy(() => import("./Pages/Marketing"));
const Finance = React.lazy(() => import("./Pages/Finance"));
const Communication = React.lazy(() => import("./Pages/Communication"));

const Login = React.lazy(() => import("./Pages/Login"));

function App() {

  useEffect(() => {
    axios.get('http://localhost/my-app-backend/index.php')
      .then(response => console.log(response.data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* General Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Certifications" element={<Certifications />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          
          {/* Tech Courses */}
          <Route path="/tech-courses" element={<TechCourses />} />
          <Route path="/courses/full-stack" element={<FullStack />} />
          <Route path="/courses/data-science" element={<DataScience />} />
          <Route path="/courses/cybersecurity" element={<CyberSecurity />} />
          <Route path="/courses/mobile-development" element={<MobileDev />} />
          <Route path="/courses/cloud-computing" element={<CloudComputing />} />

          {/* Non-Tech Courses */}
          <Route path="/non-tech-courses" element={<NonTechCourses />} />
          <Route path="/courses/civil-services" element={<CivilServices />} />
          <Route path="/courses/marketing" element={<Marketting />} />
          <Route path="/courses/finance" element={<Finances />} />
          <Route path="/courses/communication" element={<Communications />} />

          {/* Other Pages */}
          <Route path="/java" element={<Java />} />
          <Route path="/cPlusPlus" element={<CPlusPlus />} />
          <Route path="/python" element={<Python />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/civilservice" element={<CivilService />} />
          <Route path="/Marketing" element={<Marketing/>}/>
          <Route path="/Finance" element={<Finance/>}/>
          <Route path="/Communication" element={<Communication/>}/>
          <Route path="/non-academic-courses" element={<NonAcademicCourses />} />
          <Route path="/primary" element={<Primary />} />
          <Route path="/middle" element={<Middle />} />
          <Route path="/secondary" element={<Secondary />} />
          <Route path="/higher-secondary" element={<HigherSecondary />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;