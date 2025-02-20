import React from "react";
import "./Home.css";
import profilePic from "../assets/profile.png"; // Add your profile image in assets

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hello, I'm Dhawal Turkar!</h1>
        <p className="animation">A passionate Developer | AI-ML Enthusias |</p>
      </div>
      <img src={profilePic} alt="Profile" className="profile-pic" />
    </section>
  );
};

export default Home;
