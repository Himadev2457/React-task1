import React, { useState, useEffect } from "react";
import "./Portfolio.css";

const Main1 = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const sections = document.querySelectorAll(".sd1, .sd2, .sd3, .sd4, .sd5");
    let currentSection = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 50 && rect.bottom >= 50) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sd">
      <div className="md">
        <ul className="md1">
          <li>
            <a
              href="#profile-summary"
              className={activeSection === "profile-summary" ? "active" : ""}
            >
              ProfileSummary
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
            >
              Skills   
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={activeSection === "education" ? "active" : ""}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#certifications"
              className={activeSection === "certifications" ? "active" : ""}
            >
              Certifications
            </a>
          </li>
        </ul>
      </div>

      {/* <div className="sd1" id="profile-summary">
        <h2>ProfileSummary</h2>
        <p>
        Enthusiastic web development fresher skilled in HTML5, CSS, JavaScript, SQL, MYSQL, GIT&GITHUB and React.js with expertise in UI/UX,
         RESTful APIs, and testing. Adept at problem-solving, debugging, and collaborating in dynamic environments, with exposure to pipelines 
         and API integration. Passionate about creating responsive, user-friendly applications with clean design and functionality using modern
          tools like Node.js.
        </p>
      </div> */}
{/* 
      <div className="sd2" id="skills">
        <h2>Skills</h2>
        <h3>Technical Skills</h3>
        <ul>
          <li>Programming Languages: Basics of Python</li>
          <li>Front-End Technologies: HTML, CSS, JavaScript,React.js</li>
          <li>Frameworks: Bootstrap</li>
          <li>Developer Tools: VS Code, Git, GitHub, AWS</li>
        </ul>
        <h3>Soft Skills</h3>
        <ul>
          <li>Time Management</li>
          <li>Adaptability</li>
          <li>Communication</li>
        </ul>
      </div> */}
{/* 
      <div className="sd3" id="education">
        <h2>Education</h2>
        <ul>
          <li>Vikas College of Engineering and Technology (2021-2024)</li>
          <li>B.Tech in Electrical and Electronics Engineering CGPA:7.79</li><br></br>
          <li>Vikas College of Engineering and Technology(2018-2021)</li>
          <li>Diploma in Electrcal and Electronics Engineering</li>
        </ul>
      </div>

      <div className="sd4" id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            Created a Portfolio By using HTML and CSS
          </li>
          <li>
          Developed an Interactive Chess Game with HTML, CSS, and JavaScript
          </li>
        </ul>
      </div> */}

      {/* <div className="sd5" id="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>1.Sucessfully accomplished a certification in Python from Trio logic Solution Pvt Ltd</li>
          <li>2.Won 1st Prize in Poster Presentation(Thermal power plant) oN World's student's day celebrations held at Vikas College</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Main1;