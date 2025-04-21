import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  { title: "VQA Model", description: "Visual QA Model using LSTM and Bert with Attention Layer.", githubLink: "https://github.com/aka-obito/VQAModel" },
  { title: "Sign Language Using LSTM", description: "Deep Learning Model For Dynamic Sign Gestures.", githubLink: "https://github.com/aka-obito/SignLanguageMajorProject" },
  { title: "Flask File Upload App", description: "A web app to upload and manage files efficiently.", githubLink: "https://github.com/yourusername/flask-file-upload" },
  { title: "Object Detection Model", description: "Fine-tuned a pre-trained model for real-time detection.", githubLink: "https://github.com/yourusername/object-detection" },
  { title: "Stock Price Predictor", description: "Machine learning model to predict stock trends.", githubLink: "https://github.com/yourusername/stock-price-predictor" },
  { title: "E-commerce Website", description: "A full-stack e-commerce platform with payment integration.", githubLink: "https://github.com/yourusername/ecommerce-website" },
  { title: "Portfolio Website", description: "A React.js personal portfolio with a dynamic project showcase.", githubLink: "https://github.com/yourusername/portfolio-website" },
  { title: "Real-time Chat App", description: "A web-based chat application using WebSockets and Node.js.", githubLink: "https://github.com/yourusername/real-time-chat-app" }
];

const Projects = () => {
  const handleProjectClick = (githubLink) => {
    window.open(githubLink, "_blank");
  };

  return (
    <motion.section 
      className="projects"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
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
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
