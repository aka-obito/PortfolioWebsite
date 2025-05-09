import React from "react";
import "./Timeline.css";
import { motion } from "framer-motion";

// Importing all images properly
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
import t4 from "../assets/t4.png";
import t5 from "../assets/t5.png";
import t6 from "../assets/t6.png";
import t7 from "../assets/t7.png";
import t8 from "../assets/t8.png";
import t9 from "../assets/t9.png";
import t10 from "../assets/t10.jpg";



// Timeline data using imported images
const timelineData = [
  {
    year: "Jan 2022",
    title: "Started My Journey",
    description: "Began my Btech Engineering journey in CS with MITAOE, filled with countless questions and a strong will to learn and grow.",
    image: t1,
  },
  {
    year: "Mar 2022",
    title: "Memorable EGR Activity",
    description: "Shared a memorable Engineering Graphics activity with the best colleague, marking the beginning of a hidden yet meaningful journey.",
    image: t10,
  },
  {
    year: "Oct 2022",
    title: "Joined The Foreign Language Club",
    description: "Started my journey with one of the best clubs at MITAOE, marking the beginning of a rewarding and engaging experience.",
    image: t5,
  },
  {
    year: "Jan 2023",
    title: "Indo-Japanese Konnichiwa Event",
    description: "Participated in the Indo-Japanese Konnichiwa event as a Administartor of the FLC Club, fostering cross-cultural exchange and learning.",
    image: t4,
  },
  {
    year: "Mar 2024",
    title: "Club Mela",
    description: "Participated in Club Mela Activity at Nakshtra 2024 And Successfully Went Through It.",
    image: t8
  },
  {
    year: "Mar 2024",
    title: "Nakshatra",
    description: "Collaborated with my colleague Arya for a singing performance at Nakshatra 2024 and delivered it successfully.",
    image: t3,
  },
  {
    year: "Mar 2024",
    title: "Nakshatra Photoshoot",
    description: "Collaborated with the Music Club for a singing performance at Nakshatra 2024 and delivered a successful and well-received act",
    image: t6,
  },
  {
    year: "May 2024",
    title: "Industrial Visit",
    description: "Participated in an industrial visit to Smart City Pune and gained valuable insights into smart city initiatives.",
    image: t7,
  },
  {
    year: "Sept 2024",
    title: "MOU & Hilltop Signing ",
    description: "Participated in the MoU and Hilltop Signing Event, conducted by the FLC Club in collaboration with the IRO Cell at MITAOE",
    image: t2,
  },
  {
    year: "Feb 2025",
    title: "Signing Of FLC",
    description: "Concluded my journey with the FLC Club, cherishing countless fun memories and valuable lessons learned along the way.",
    image: t9,
  }
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
