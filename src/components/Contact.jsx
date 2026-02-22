import { useState } from 'react';
import "./common.css"; 

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    // As a Full-Stack Intern, you can connect this to your Spring Boot backend
    console.log("Form submitted for:", email, message);
    
    // Simulate API delay
    setTimeout(() => {
      setStatus("Message sent successfully!");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-subtitle">
          Have a project in mind? Let's build something great together.
        </p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input 
              id="email"
              type="email" 
              className="form-input"
              placeholder="namitanv0912@email.com"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea 
              id="message"
              className="form-textarea"
              placeholder="Tell me about your project..."
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-submit-btn">
            {status || "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}