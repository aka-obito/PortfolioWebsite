import React from "react";
import "./Projects.css";

const projects = [
  { title: "TradingView Screener", description: "Stock market analysis tool using Python and Flask." },
  { title: "CNN-LSTM Model", description: "Hybrid deep learning model for time series analysis." },
  { title: "Flask File Upload App", description: "A web app to upload and manage files efficiently." },
  { title: "Object Detection Model", description: "Fine-tuned a pre-trained model for real-time detection." },
  { title: "Stock Price Predictor", description: "Machine learning model to predict stock trends." },
  { title: "E-commerce Website", description: "A full-stack e-commerce platform with payment integration." },
  { title: "Portfolio Website", description: "A React.js personal portfolio with a dynamic project showcase." },
  { title: "Real-time Chat App", description: "A web-based chat application using WebSockets and Node.js." }
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
