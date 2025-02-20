import React from "react";
import "./Resume.css";
import resumePDF from "../assets/resume.pdf"; // Place your resume in assets folder

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <iframe src={resumePDF} title="Resume" width="100%" height="100%"></iframe>
      <a href={resumePDF} download className="download-btn">Download Resume</a>
    </section>
  );
};

export default Resume;
