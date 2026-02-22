import React from 'react';
import './common.css';

const services = [
  
  { 
    title: 'FULL-STACK DEVELOPMENT', 
    desc: 'Building robust backend systems with Java Spring Boot and responsive frontends using React.js and Tailwind CSS.', 
    icon: '💻' 
  },
  { 
    title: 'AI & MACHINE LEARNING', 
    desc: 'Developing data-driven solutions including NLP and Deep Learning models, with experience in FastAPI deployment.', 
    icon: '🤖' 
  },
  { 
    title: 'DATABASE MANAGEMENT', 
    desc: 'Designing and integrating efficient MySQL and MongoDB schemas to ensure high data integrity and accuracy.', 
    icon: '📊' 
  },
 
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">My Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-name">{service.title}</h3>
              <p className="service-description">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;