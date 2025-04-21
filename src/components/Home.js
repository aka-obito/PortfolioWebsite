import React from "react";
import "./Home.css";
import profilePic from "../assets/profile.png";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

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
            "A Passionate Developer",
            "AI-ML Enthusiast",
            "A Problem Solver",
          ]}
          typeSpeed={60}
          backSpeed={40}
          loop
        />
      </motion.div>

      <motion.img
        src={profilePic}
        alt="Profile"
        className="profile-pic"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      />
    </section>
  );
};

export default Home;
