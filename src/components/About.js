import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHtml5, faCss3Alt, faJs, faReact, faPython 
} from "@fortawesome/free-brands-svg-icons";
import { faBrain, faChartLine, faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
// import p6 from "../assets/p6.jpg";

import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";
import cert3 from "../assets/cert3.jpg";
import cert4 from "../assets/cert4.jpg";
import cert5 from "../assets/cert5.jpg";
import cert6 from "../assets/cert6.jpg";

import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import c6 from "../assets/c6.png";
import c7 from "../assets/c7.png";
import c8 from "../assets/c8.png";
import c9 from "../assets/c9.jpg";

import pdf1 from "../assets/pdf1.pdf";
import pdf2 from "../assets/pdf2.pdf";
import pdf3 from "../assets/pdf3.pdf";
import pdf4 from "../assets/pdf4.pdf";
import pdf5 from "../assets/pdf5.pdf";
import pdf6 from "../assets/pdf6.pdf";
import pdf7 from "../assets/pdf7.pdf";
import pdf8 from "../assets/pdf8.pdf";
import pdf9 from "../assets/pdf9.pdf";

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
        <div className="section1">
        <p>
          <strong>Previous Education</strong>
          <ul>
            <li>10th: Jankidevi Chouragade High School, Gondiya (91.80%)</li>
            <li>12th: Jankidevi Chouragade Jr. College of Science, Gondiya (86.92%)</li>
          </ul>

          <strong>Current Education</strong>
          <ul>
            <li>Degree: B.Tech in Computer Science at "MIT Academy of Engineering (MITAOE)"</li>
            <li>Admission: Secured through "MHT-CET with 96 percentile"</li>
            <li>CGPA: 8.58</li>
          </ul>

          <strong>Leadership & International Exposure</strong>
          <ul>
            <li>Administrator of the "Foreign Language Club" at MITAOE</li>
            <li>Participated in Indo-Japanese exchange programs like "Konnichiwa Pune"</li>
          </ul>

          <strong>Career Objective:</strong>
          <ul>
            <li>Strive for continuous growth in both academic and personal development</li>
            <li>Aim to make a meaningful impact through extracurricular involvement</li>
          </ul>
        </p>

        </div>
      </section>

      <section className="section recognition">
        <h2>Achievements</h2>
        <div className="recognition-list">
          {[
            {
              img: p2,
              text: [
                "Presented our LSTM-based research at AVINYA 2025 on National Science Day 📚.",
                "Our paper made it to the top 5 🏆 among 52 finalists — an unforgettable moment. ⚡"
              ]
            },
            {
              img: p1,
              text: [
                "Secured 1st prize 🥇 in the Product to Project competition by E-CELL at MITAOE.",
                "This milestone fueled my passion for innovation and project-based learning. 🚀"
              ]
            },
            {
              img: p3,
              text: [
                "Served as Treasurer of the Foreign Language Club (2024–2025) at MITAOE 🌍.",
                "Grateful for the Certificate of Appreciation recognizing my dedication 🤝."
              ]
            },
            {
              img: p4,
              text: [
                "Got Best Paper Presenter at IEEE ICIICS-2024 🏆 for our AI-based healthcare research.",
                "Achieved 96.98% accuracy using SMOTE and GridSearchCV 🚀📊."
              ]
            },
            {
              img: p5,
              text: [
                "Earned the Oracle Cloud Infrastructure 2023 Foundations Associate cert 🌐.",
                "Marked a strong step in my cloud journey with core OCI knowledge ⚙️☁️."
              ]
            }
            

          ].map((item, index) => (
            <div key={index} className={`recognition-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <img src={item.img} alt={`Project ${index + 1}`} className="gallery-image" />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

    <section className="section">
      <h2>Certifications</h2>
      <div className="badge-scroll-container">
        <div className="badge-container">
          {[
            { badge: c8, pdf: pdf8 },
            { badge: c9, pdf: pdf9 },
            { badge: c1, pdf: pdf1 },
            { badge: c2, pdf: pdf2 },
            { badge: c5, pdf: pdf5 },
            { badge: c3, pdf: pdf3 },
            { badge: c4, pdf: pdf4 },
            { badge: c6, pdf: pdf6 },
            { badge: c7, pdf: pdf7 },
          ].map((item, index) => (
            <div className="badge-item" key={index}>
              <img
                src={item.badge}
                alt={`Badge ${index + 1}`}
                className="badge"
                onClick={() => window.open(item.pdf, "_blank")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>



      <section className="section">
        <h2>Experience</h2>
        <div className="section1">
          <p>
            <ul>
              <li>Completed virtual internships with <i>TechSaksham</i> and <i>Eduskills</i>, learning <i>AI/ML</i> and Android development</li>
              <li>Built Python GUI apps during a <i>1-month internship at CodSoft</i>, improving Python and UI skills</li>
              <li>Contributed to <i>"Day Trade Light"</i> project using <i>ML</i> during a <strong>2-month internship at Hackveda</strong></li>
              <li>Developed candlestick charts and an automated email system using Google Crawler and SMTP</li>
              <li>Used <i>Django</i>, <i>Flask</i>, and <i>SnakeViz</i> 📊 for web development and performance analysis</li>
              <li>Gained full-stack experience and teamwork skills through practical project work</li>
            </ul>              
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Internships</h2>
        <div className="certifications">
          {[cert1, cert2, cert3, cert4, cert5, cert6].map((cert, index) => (
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
