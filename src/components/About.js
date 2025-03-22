import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHtml5, faCss3Alt, faJs, faReact, faPython 
} from "@fortawesome/free-brands-svg-icons"; // Import relevant icons
import { faBrain, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.jpg"
import p4 from "../assets/p4.jpg"
import p5 from "../assets/p5.jpg"
import p6 from "../assets/p6.jpg"
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <h2>Introduction</h2>
      <p> 
        I am a Computer Science student and AIML enthusiast with an open elective in AI & Machine Learning. I have worked on various
        projects in these domains and am proficient in C++ and Python languages. Additionally, I have knowledge of frontend web
        development, including frameworks like React.js, as well as HTML, CSS, and JavaScript languages.
      </p>

      <h2>Experience</h2>
      <p>
        I am Dhawal Turkar, a Python Developer passionate about Data Science, Machine Learning, and Web Development. 
        I have experience in Python, Flask, React.js, OpenCV, and LSTM models.<br></br>
        I am a Computer Science student and AIML enthusiast with an open elective in AI & Machine Learning. I have worked on various
        projects in these domains and am proficient in C++ and Python languages. Additionally, I have knowledge of frontend web
        development, including frameworks like React.js, as well as HTML, CSS, and JavaScript languages.
      </p>

      {/* Images Section */}
      <h2>Gallery</h2>
      <div className="image-gallery">
        <img src={p1} alt="Project Screenshot 1" className="gallery-image" />
        <img src={p2} alt="Project Screenshot 2" className="gallery-image" />
        <img src={p3} alt="Project Screenshot 3" className="gallery-image" />
        <img src={p4} alt="Project Screenshot 4" className="gallery-image" />
        <img src={p5} alt="Project Screenshot 4" className="gallery-image" />
        <img src={p6} alt="Project Screenshot 4" className="gallery-image" />
        
      </div>

      <h2>Skill Set</h2>
      <div className="skills">
        <div className="skill">
          <FontAwesomeIcon icon={faHtml5} className="icon html" />
          <p>HTML</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faCss3Alt} className="icon css" />
          <p>CSS</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faJs} className="icon js" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faReact} className="icon react" />
          <p>React.js</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faPython} className="icon python" />
          <p>Python</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faDatabase} className="icon sql" />
          <p>SQL</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faCode} className="icon cpp" />
          <p>C++</p>
        </div>
          <div className="skill">
            <FontAwesomeIcon icon={faBrain} className="icon ai" />
            <p>AI</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faChartLine} className="icon ml" />
            <p>ML</p>
          </div>
        </div>

      <h2>Achievement</h2>
      <p>
        I am Dhawal Turkar, a Python Developer passionate about Data Science, Machine Learning, and Web Development. 
        I have experience in Python, Flask, React.js, OpenCV, and LSTM models.<br></br>
        I am a Computer Science student and AIML enthusiast with an open elective in AI & Machine Learning. I have worked on various
        projects in these domains and am proficient in C++ and Python languages. Additionally, I have knowledge of frontend web
        development, including frameworks like React.js, as well as HTML, CSS, and JavaScript languages.
      </p>

    </section>
  );
};

export default About;
