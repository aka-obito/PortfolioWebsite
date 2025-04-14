import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHtml5, faCss3Alt, faJs, faReact, faPython 
} from "@fortawesome/free-brands-svg-icons";
import { faBrain, faChartLine, faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";

import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";
import cert3 from "../assets/cert3.jpg";
import cert4 from "../assets/cert4.jpg";
import cert5 from "../assets/cert5.jpg";
import cert6 from "../assets/cert6.jpg";

import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import c6 from "../assets/c6.png";
import c7 from "../assets/c7.png";

import pdf1 from "../assets/pdf1.pdf";
import pdf2 from "../assets/pdf2.pdf";
import pdf3 from "../assets/pdf3.pdf";
import pdf4 from "../assets/pdf4.pdf";
import pdf5 from "../assets/pdf5.pdf";
import pdf6 from "../assets/pdf6.pdf";
import pdf7 from "../assets/pdf7.pdf";

import "./About.css";

const About = () => {
  useEffect(() => {
    const revealSections = () => {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight * 0.8;
        if (sectionTop < windowHeight) {
          section.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", revealSections);
    revealSections(); // Run once on mount

    return () => window.removeEventListener("scroll", revealSections);
  }, []);
  
  return (
    <div className="about">
      <section className="section">
        <h2>Introduction</h2>
        <div className="section1">
          <p>
            I’m <strong>Dhawal Turkar</strong>, a passionate Computer Science student currently pursuing my <strong>B.Tech at MIT Academy of Engineering (MITAOE)</strong> 🎓. I secured admission through <strong>MHT-CET with a 96 percentile</strong>, and my college journey has been filled with learning, achievements, and memorable experiences.

            With a strong interest in <strong>Artificial Intelligence & Machine Learning</strong> 🤖, I’ve taken AI & ML as my open elective and worked on multiple projects in this field. I’m proficient in <strong>Python</strong> and <strong>C++</strong>, along with frontend web development using <strong>React.js, HTML, CSS, and JavaScript</strong>.

            Academically, I’ve maintained a good record with a <strong>current CGPA of 8.58</strong> and completed an <strong>internship at Hackveda Limited</strong> as a Python Developer, gaining practical exposure to backend development and AI.

            I’ve also been active in extracurriculars—representing my department in <strong>volleyball</strong> and securing <strong>first place</strong> in a college tournament 🏆. Additionally, I participated in cultural fests like <strong>Nakshatra</strong> and performed on stage, embracing the creative side of college life.

            As the <strong>Administrator of the Foreign Language Club</strong> at MITAOE, I led and participated in Indo-Japanese exchange programs like <strong>Konnichiwa Pune</strong> 🌏, where we earned exciting prizes and international exposure.

            With a blend of academics, leadership, and extracurricular involvement, I aim to grow continuously and make a meaningful impact in everything I do.
          </p>
        </div>
      </section>

      <section className="section recognition">
        <h2>Achievements</h2>
        <div className="recognition-list">
          {[
            { img: p1, text: "During the Third Year of my B.Tech journey at MIT Academy of Engineering, I experienced one of the most memorable highlights of my academic life. I proudly secured the 1st prize 🥇 in the Product to Project certificate competition, a prestigious event hosted by E-CELL on 15th January 2024. This competition was a perfect stage to transform raw ideas into meaningful, scalable projects—blending creativity with execution. Presenting my vision, overcoming challenges, and receiving validation from industry mentors was truly empowering. It wasn’t just a win; it was a breakthrough that ignited my passion for innovation and project-based learning." },
            { img: p2, text: "This achievement holds a special place in my heart—not just as a trophy, but as a milestone in my learning journey. I still remember the excitement in the air, the buzz of brilliant ideas being pitched, and the proud moment when my name was called for the top honor. 🚀 The support from my mentors and peers made the experience even more fulfilling. Moments like these remind me why I chose this path and inspire me to keep pushing boundaries in product development and project management. It's more than a memory; it’s a spark that continues to drive my ambitions forward. 🌟" },
            { img: p3, text: "In the final year of my B.Tech journey at MIT Academy of Engineering 🎓, I had the honor of participating in one of the most intellectually rewarding experiences—AVINYA 2025, the institute’s first-ever Undergraduate Students' Conference, held on National Science Day (February 28th) 📚. Our research paper, 'Breaking Down Communication Barriers: A Deep Learning Approach Using LSTM to Empower Communication for Specially Abled Individuals,' was selected among 52 finalists from 87 submissions 📝. Presenting this innovative project with my amazing teammates—Arya Khobragade and Manav Wadikar—was a proud and electrifying moment ⚡. The cherry on top? We made it to the top 5 finalists for the Best Paper Award! 🏆" },
            { img: p4, text: "The entire experience still feels like a core memory ✨—not just as a competition, but a celebration of curiosity, teamwork, and innovation 💡. From gaining invaluable insights by industry experts like Dr. Avadhut Sardeshmukh (TCS) and Mr. Yogesh Dandawate (Excelize AI Pvt. Ltd.) 👨‍🏫 to being cheered on by inspiring mentors, everything about AVINYA 2025 felt magical 🎤. A huge shoutout to Dr. Sunita Barve Ma’am for organizing this visionary platform and to Mrs. Aarti Deshpande Ma’am for her unwavering support throughout the journey 🙏. This event didn’t just add a feather to our cap—it sparked a deeper passion for tech-driven social impact and left us all motivated to reach for more 🔬." },
            { img: p5, text: "Honored to receive the 'Best Paper Presenter' award at the 2nd IEEE ICIICS-2024 🏆 for our research on 'Age-Adaptive Lung Cancer Prediction Using Ensemble Learning Methods' 📊. Our study tackled early detection challenges by creating age-specific ML models using SMOTE for data balancing and GridSearchCV for tuning, achieving up to 96.98% accuracy 🚀. This recognition at such a prestigious platform motivates us to keep pushing the boundaries of AI in healthcare 🧠💡. Grateful to Sharnbasva University and the IEEE Bangalore Section for this inspiring opportunity 🙏✨." },
            { img: p6, text: "Thrilled to have earned the Oracle Cloud Infrastructure 2023 Certified Foundations Associate certification 🌐, showcasing my foundational expertise in Oracle Cloud services, architecture, and core infrastructure principles ☁️. Achieving this in my 2nd year marked a key milestone in strengthening my cloud computing skills early on, and it reflects my commitment to staying ahead in the evolving tech landscape ⚙️🚀. This certification, valid through 2025, adds valuable credibility to my cloud knowledge and fuels my passion for building scalable, cloud-native solutions 💡🔐" }
          ].map((item, index) => (
            <div key={index} className={`recognition-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <img src={item.img} alt={`Project ${index + 1}`} className="gallery-image" />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Certifications</h2>
        <div class="badge-scroll-container">
            <div class="badge-container">
              <div className="badge-container">
                {[
                  { badge: c1, pdf: pdf1 },
                  { badge: c2, pdf: pdf2 },
                  { badge: c5, pdf: pdf5 },
                  { badge: c3, pdf: pdf3 },
                  { badge: c4, pdf: pdf4 },
                  { badge: c6, pdf: pdf6 },
                  { badge: c7, pdf: pdf7 },
                ].map((item, index) => (
                  <div className="badge-item" key={index}>
                    <img
                      src={item.badge}
                      alt={`Badge ${index + 1}`}
                      className="badge"
                      onClick={() => window.open(item.pdf, "_blank")}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>


      <section className="section">
        <h2>Experience</h2>
        <div className="section1">
          <p>
            I have successfully completed several internships that have significantly enhanced my technical skills. Notably, I undertook virtual internships with <strong>TechSaksham</strong> and <strong>Eduskills</strong>, where I developed strong proficiency in <strong>Artificial Intelligence & Machine Learning (AI/ML)</strong> and Android Development.<br/><br/>

            My first internship was a <strong>1-month program at CodSoft</strong>, where I worked on multiple Python-based projects. These included developing <strong>GUI-based applications</strong> such as calculators, a to-do list, and a quiz game, allowing me to strengthen my foundation in Python and user interface development.<br/><br/>

            My second internship was a <strong>2-month summer internship at Hackveda Limited</strong> 🧠, where I worked on a project titled <strong>"Day Trade Light"</strong>. During this time, I applied various <strong>Machine Learning algorithms</strong> and performed <strong>data analysis</strong> tasks, such as analyzing the trade data of <strong>BOB Bank</strong> and visualizing insights using <strong>candlestick charts</strong>.

            I also contributed to building an <strong>automated email system</strong> using <strong>Google Crawler</strong> and <strong>SMTP</strong>. Throughout the internship, I worked with several technologies, including <strong>Django</strong> and <strong>Flask</strong>, to deliver <strong>end-to-end web development solutions</strong>. Additionally, I helped create multiple data visualization charts using tools like <strong>SnakeViz</strong> 📊, enabling better performance profiling and analysis.

            This internship provided hands-on experience in full-stack development and collaborative teamwork with a group of talented and supportive colleagues, making it a truly enriching and memorable part of my learning journey.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Internships</h2>
        <div className="certifications">
          {[cert1, cert2, cert3, cert4, cert5, cert6].map((cert, index) => (
            <img key={index} src={cert} alt={`Certificate ${index + 1}`} className="cert-image" />
          ))}
        </div>
      </section>


      <section className="section">
        <h2>Skill Set</h2>
        <div className="skills">
          {[
            { icon: faHtml5, name: "HTML", className: "html" },
            { icon: faCss3Alt, name: "CSS", className: "css" },
            { icon: faJs, name: "JavaScript", className: "js" },
            { icon: faReact, name: "React.js", className: "react" },
            { icon: faPython, name: "Python", className: "python" },
            { icon: faDatabase, name: "SQL", className: "sql" },
            { icon: faCode, name: "C++", className: "cpp" },
            { icon: faBrain, name: "AI", className: "ai" },
            { icon: faChartLine, name: "ML", className: "ml" }
          ].map((skill, index) => (
            <div key={index} className="skill">
              <FontAwesomeIcon icon={skill.icon} className={`icon ${skill.className}`} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
