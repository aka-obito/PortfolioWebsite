import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import pr1 from "../assets/video/pr1.mp4";
import pr2 from "../assets/video/pr2.mp4";
import pr3 from "../assets/video/pr3.mp4";
import pr4 from "../assets/video/pr4.mp4";
import pr5 from "../assets/video/pr5.mp4";
import pr6 from "../assets/video/pr6.mp4";
import pr7 from "../assets/video/pr7.mp4";
import pr8 from "../assets/video/pr8.mp4";
import pr9 from "../assets/video/pr9.mp4";

const projects = [
  { 
    title: "Minor Project", 
    description: "Sign Language Recognition Model Using CNN ", 
    githubLink: "https://github.com/aka-obito/VQAModel",
    video: pr1
  },
  { 
    title: "Major Project", 
    description: "Deep Learning LSTM Model For Dynamic Sign Gestures.", 
    githubLink: "https://github.com/aka-obito/SignLanguageMajorProject",
    video: pr2
  },
  { 
    title: "Capstone Project", 
    description: "KRUSHI MITRA: Crop Yield Prediction Using Machine Learning", 
    githubLink: "https://github.com/yourusername/flask-file-upload",
    video: pr3
  },
  { 
    title: "EchoBeats Music", 
    description: "Robust Music App for Music streaming And Chatting With Friends.", 
    githubLink: "https://github.com/yourusername/object-detection",
    video: pr4
  },
  { 
    title: "VQA Model", 
    description: "Deep Learning Approch for Visual Quetion Answering.", 
    githubLink: "https://github.com/yourusername/stock-price-predictor",
    video: pr5
  },
  {
    title: "Anti-Theft Alarm Monitoring System",
    description: "A full-stack e-commerce platform with payment integration.",
    githubLink: "https://github.com/yourusername/ecommerce-website",
    video: pr6
  },  
  { 
    title: "Online Personlised Learning Platform", 
    description: "A React.js personal portfolio with a dynamic project showcase.", 
    githubLink: "https://github.com/yourusername/portfolio-website",
    video: pr7
  },
  { 
    title: "AI Proctoring System", 
    description: "A web-based chat application using WebSockets and Node.js.", 
    githubLink: "https://github.com/yourusername/real-time-chat-app",
    video: pr8
  },
  { 
    title: "Weather App", 
    description: "A web-based chat application using WebSockets and Node.js.", 
    githubLink: "https://github.com/yourusername/real-time-chat-app",
    video: pr9
  }
];

const Projects = () => {
  const handleProjectClick = (githubLink) => {
    window.open(githubLink, "_blank");
  };

  return (
    <motion.section 
      className="projects"
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <h2>Projects</h2>
      <motion.div 
        className="project-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            onClick={() => handleProjectClick(project.githubLink)}
            style={{ cursor: "pointer" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {project.video ? (
              <video
                src={project.video}
                loop
                autoPlay
                muted
                playsInline
                className="project-image"
              />
            ) : (
              <img
                src={project.img}
                alt={project.title}
                className="project-image"
              />
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
