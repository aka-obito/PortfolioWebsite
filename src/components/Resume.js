import React from "react";
import "./Resume.css";
import resumePDF from "../assets/resume.pdf";

const Resume = () => {
  return (
    <section className="resume">
      <h2 className="resume-title">Resume</h2>

      <div className="resume-content">
        <h3>Turkar Dhawal Homendrakumar</h3>
        <p className="contact">
          📞 +91-9325866943 | ✉️ <a href="mailto:dhawal.turkar@mitaoe.ac.in">dhawal.turkar@mitaoe.ac.in</a><br />
          📍 Pune, Maharashtra | 
          <a href="https://www.linkedin.com/in/dhawal-turkar-7bb8b325b" target="_blank" rel="noreferrer"> LinkedIn</a> | 
          <a href="https://github.com/aka-obito" target="_blank" rel="noreferrer"> GitHub</a>
        </p>

        <h4>Professional Summary</h4>
        <p>
          Computer Science student and AI/ML enthusiast skilled in Python, C++, and full-stack development. Experienced in machine learning, deep learning, and computer vision with published research and internship exposure.
        </p>

        <h4>Technical Skills</h4>
        <ul>
          <li><strong>Languages:</strong> Python, C++, JavaScript, SQL</li>
          <li><strong>Frameworks & Libraries:</strong> React.js, Flask, Node.js, OpenCV</li>
          <li><strong>Technologies:</strong> ML, DL, NLP, CV</li>
          <li><strong>Tools:</strong> Git, VS Code, Jupyter</li>
        </ul>

        <h4>Education</h4>
        <ul>
          <li>B.Tech CSE – MITAOE, Pune | CGPA: 8.58 | 2021–2025</li>
          <li>HSC – Jankidevi Jr. College, Gondia | 86.96%</li>
          <li>SSC – Jankidevi High School, Gondia | 91.80%</li>
        </ul>

        <h4>Internship</h4>
        <p><strong>Python Developer – Hackveda Limited</strong> (Jul–Sep 2024)</p>
        <ul>
          <li>Worked on ML/DL projects with Flask</li>
          <li>Documented and deployed live projects</li>
        </ul>

        <h4>Projects</h4>
        <ul>
          <li>
            <strong>VQA Model with Encoder-Decoder</strong> – 
            <a href="https://github.com/aka-obito/VQAModel" target="_blank" rel="noreferrer"> GitHub</a><br />
            ResNet-LSTM with attention to answer image-based questions.
          </li>
          <li>
            <strong>Web App for Deaf/Dumb</strong> – 
            <a href="https://github.com/aka-obito/MajorProject.git" target="_blank" rel="noreferrer"> GitHub</a><br />
            Real-time sign language recognition using deep learning.
          </li>
          <li>
            <strong>Online Learning Tool</strong> – 
            <a href="https://github.com/aka-obito/Online-personalized-learning" target="_blank" rel="noreferrer"> GitHub</a><br />
            React + Node.js platform for personalized tutor access.
          </li>
        </ul>

        <h4>Publication</h4>
        <p>
          <strong>IEEE ICIICS-2024</strong>: Age-Adaptive Lung Cancer Prediction using Ensemble Models.
        </p>

        <h4>Certifications</h4>
        <ul>
          <li>Oracle Certified Foundations Associate – Sep 2025</li>
          <li>Google AIML Virtual Internship</li>
          <li>Virtual Internship in Cloud Security</li>
        </ul>

        <h4>Achievements</h4>
        <ul>
          <li>🥇 1st Prize – Project to Product (E-cell MITAOE)</li>
          <li>🥇 1st Prize – Volleyball (College Fest)</li>
        </ul>

        <h4>Leadership</h4>
        <p>Administrator – Foreign Language Club, MITAOE</p>

        <h4>Hobbies</h4>
        <p>Hiking • Photography • Building Projects</p>

        <a href={resumePDF} download className="download-btn">Download Resume</a>
      </div>
    </section>
  );
};

export default Resume;
