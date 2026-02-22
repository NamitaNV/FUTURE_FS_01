import React from 'react';
import './common.css';

export default function Projects() {
  const myProjects = [
 
    { 
      id: 1, 
      title: "Blockchain-Driven Smart Library System", 
      tech: "J2EE, Blockchain", 
      desc: "A secure library system supporting 300+ users that reduced overdue returns by 40% using blockchain technology.",
      link: "SmartLibrary"
    },
    { 
      id: 2, 
      title: "AI-Enhanced Snake Game", 
      tech: "Python, Pygame", 
      desc: "A feature-rich game implementation that increased average player engagement and playtime by 30%.",
      link: "SnakeGame"
    },
    {  
      id: 3,
      title: "Audio Visualizer",
      tech: "JavaScript",
      desc: "An interactive audio visualization tool that renders real-time waveform data using Web Audio API.",
      link: "Audio-Visualier" // fixed spelling too
    },
    {  
      id: 4,
      title: "Expense Tracker",
      tech: "Flask, SQLite",
      desc: "Built a full-stack expense tracker using Flask and SQLite. Allows users to add, update, delete, and categorize transactions with data visualization.",
      link: "Expense_Tracker"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {myProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <span className="project-tech">{project.tech}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.desc}</p>

                <a 
                  href={`https://github.com/NamitaNV/${project.link}`}
                  className="project-link"
                  aria-label={`View details for ${project.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 