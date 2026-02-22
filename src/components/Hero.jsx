import React from 'react';
import './common.css';
import profilePic from "./__Namita's_Passport.jpg";
import cvFile from "./Namita_CV.pdf";

const Hero = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Namita_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero-section">
      <nav className="navbar">
        <div className="logo">NNV</div>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Namita Nandakumar Varier</span>
          </h1>

          <p className="hero-description">
            A <strong>Versatile Software Engineer</strong> proficient across the stack. 
            I specialize in building robust backend systems with <strong>Java & Spring Boot</strong>, 
            creating responsive frontends with <strong>React.js</strong>, and developing 
            data-driven applications using <strong>AI/ML and Python</strong>.
          </p>

          <div className="button-group">
            <a 
             href="https://www.linkedin.com/in/namita-nv-dev/" 
             target="_blank" 
             rel="noopener noreferrer">

            <button className="btn-primary">Hire Me</button>
            </a>


            <button className="btn-secondary" onClick={handleDownload}>
              Download CV <span className="icon">↓</span>
            </button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="image-container">
            <div className="glow-effect"></div>
            <img 
              src={profilePic} 
              alt="Namita Nandakumar Varier" 
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
