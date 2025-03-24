import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHtml5, faCss3Alt, faJs, faReact, faPython 
} from "@fortawesome/free-brands-svg-icons";
import { faBrain, faChartLine, faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";
import cert3 from "../assets/cert3.jpg";
import cert4 from "../assets/cert4.jpg";
import "./About.css";

const About = () => {
  useEffect(() => {
    const revealSections = () => {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight * 0.8;
        if (sectionTop < windowHeight) {
          section.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", revealSections);
    revealSections(); // Run once on mount

    return () => window.removeEventListener("scroll", revealSections);
  }, []);

  return (
    <div className="about">
      <section className="section">
        <h2>Introduction</h2>
        <p> 
          I am a Computer Science student and AIML enthusiast with an open elective in AI & Machine Learning. 
          I have worked on various projects in these domains and am proficient in C++ and Python languages. 
          Additionally, I have knowledge of frontend web development, including frameworks like React.js, as well as HTML, CSS, and JavaScript.
        </p>
      </section>

      <section className="section">
        <h2>Experience</h2>
        <p>
          I am Dhawal Turkar, a Python Developer passionate about Data Science, Machine Learning, and Web Development. 
          I have experience in Python, Flask, React.js, OpenCV, and LSTM models.
        </p>
      </section>

      <section className="section">
        <h2>Recognition</h2>
        <div className="image-gallery">
          {[p1, p2, p3, p4, p5, p6].map((img, index) => (
            <img key={index} src={img} alt={`Project ${index + 1}`} className="gallery-image" />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Achievement</h2>
        <p>
          I have worked on various projects in AI & ML, including Flask applications, CNN-LSTM models, and real-time object detection.
        </p>
      </section>

      <section className="section">
        <h2>Certifications</h2>
        <div className="certifications">
          {[cert1, cert2, cert3, cert4].map((cert, index) => (
            <img key={index} src={cert} alt={`Certificate ${index + 1}`} className="cert-image" />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Skill Set</h2>
        <div className="skills">
          {[
            { icon: faHtml5, name: "HTML", className: "html" },
            { icon: faCss3Alt, name: "CSS", className: "css" },
            { icon: faJs, name: "JavaScript", className: "js" },
            { icon: faReact, name: "React.js", className: "react" },
            { icon: faPython, name: "Python", className: "python" },
            { icon: faDatabase, name: "SQL", className: "sql" },
            { icon: faCode, name: "C++", className: "cpp" },
            { icon: faBrain, name: "AI", className: "ai" },
            { icon: faChartLine, name: "ML", className: "ml" }
          ].map((skill, index) => (
            <div key={index} className="skill">
              <FontAwesomeIcon icon={skill.icon} className={`icon ${skill.className}`} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
