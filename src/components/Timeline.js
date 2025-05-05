import React from "react";
import "./Timeline.css";
import { motion } from "framer-motion";

// Importing all images properly
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.png";
import t4 from "../assets/t4.png";
import t5 from "../assets/t5.png";
import t6 from "../assets/t6.png";
import t7 from "../assets/t7.png";
import t8 from "../assets/t8.png";
import t9 from "../assets/t9.png";



// Timeline data using imported images
const timelineData = [
  {
    year: "2021",
    title: "Started My Journey",
    description: "Began my coding journey by building small websites and learning Python.",
    image: t1,
  },
  {
    year: "2022",
    title: "First Internship",
    description: "Worked on real-world projects, gained practical experience, and improved debugging skills.",
    image: t2,
  },
  {
    year: "2023",
    title: "Hackathons & Projects",
    description: "Participated in hackathons and built projects like Crop Yield Predictor and Object Detection Tool.",
    image: t3,
  },
  {
    year: "2024",
    title: "Current Portfolio",
    description: "Launched my portfolio showcasing all the milestones and projects I've built so far.",
    image: t4,
  },
  {
    year: "2025",
    title: "Current Portfolio",
    description: "Launched my portfolio showcasing all the milestones and projects I've built so far.",
    image: t5,
  },
  {
    year: "2026",
    title: "Current Portfolio",
    description: "Launched my portfolio showcasing all the milestones and projects I've built so far.",
    image: t6,
  },
  {
    year: "2027",
    title: "Current Portfolio",
    description: "Launched my portfolio showcasing all the milestones and projects I've built so far.",
    image: t7,
  },
  {
    year: "2028",
    title: "Current Portfolio",
    description: "Launched my portfolio showcasing all the milestones and projects I've built so far.",
    image: t8,
  },
  {
    year: "2029",
    title: "Current Portfolio",
    description: "Launched my portfolio showcasing all the milestones and projects I've built so far.",
    image: t9,
  },

];

const Timeline = () => {
  return (
    <section className="timeline-container">
      <h2 className="timeline-header">Timeline</h2>
      <div className="timeline">
        {timelineData.map((event, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }} // amount controls how much of the element should be visible
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            <div className="timeline-content">
              <img
                src={event.image}
                alt={`glimpse-${index}`}
                className="timeline-img"
              />
              <div>
                <h3>{event.year}</h3>
                <h4>{event.title}</h4>
                <p>{event.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
