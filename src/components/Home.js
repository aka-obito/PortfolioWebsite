import React from "react";
import "./Home.css";
import profilePic from "../assets/profile.png";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import Sparkle from "react-sparkle"; // Import Sparkle

const Home = () => {
  return (
    <section className="home">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hello, I'm Dhawal Turkar!</h1>
        <ReactTyped
          className="typed-text"
          strings={[
            "Web Developer",
            "AI-ML Enthusiast",
            "Problem Solver",
          ]}
          typeSpeed={60}
          backSpeed={40}
          loop
        />
      </motion.div>

      <motion.div
        className="profile-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {/* Sparkle only inside image section */}
        <Sparkle
          color="#000000" // Black sparkles
          count={50}
          minSize={3}
          maxSize={7}
          overflowPx={10}
          fadeOutSpeed={70}
          flicker={false}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
        <img
          src={profilePic}
          alt="Profile"
          className="profile-pic"
        />
      </motion.div>
    </section>
  );
};

export default Home;
