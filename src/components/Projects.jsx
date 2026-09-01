import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: "Suchigo Waste Management",
    description: "Full-stack waste management portal for scheduling pickups & tracking.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Django", "MySQL", "REST API"],
    github: "#",
    live: "#"
  },
  {
    title: "LumosKart E-Commerce",
    description: "Influencer-driven shopping platform with cart & checkout. Dual deployment.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    tags: ["Django", "MySQL", "Bootstrap"],
    github: "#",
    live: "https://www.lumoskart.com/"
  },
  {
    title: "Nakshathra Gold ERP",
    description: "Custom Odoo 17 ERP: modules, PDF reports & dashboards.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    tags: ["Odoo 17", "Python", "ERP"],
    github: "#",
    live: "#"
  },
  {
    title: "Cab Booking Website",
    description: "Responsive UI with dynamic elements for cab booking services.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    tags: ["HTML", "CSS", "JS", "UI/UX"],
    github: "#",
    live: "https://nabeel165.github.io/ride/"
  },
  {
    title: "AI Chatbot Buddy",
    description: "ChatGPT-inspired conversational interface built with modern AI integration.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "AI", "Frontend"],
    github: "#",
    live: "https://ai-chatter-buddy-42.lovable.app/"
  },
  {
    title: "Cafe Landing Page",
    description: "Animated, highly responsive cafe website to showcase products and locations.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
    tags: ["HTML5", "CSS3", "Animations"],
    github: "#",
    live: "https://cerulean-gaufre-0a5d81.netlify.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
          <p className="section-subtitle">Real-world applications and deployments I've built.</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  {project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Site">
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
