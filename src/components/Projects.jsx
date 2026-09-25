import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import punyamImage from '../assets/11a3af08a74e52eb3f5bad010218fa28.jpg';
import './Projects.css';

const projects = [
  {
    title: "Suchigo Waste Management",
    description: "Full-stack waste management portal for scheduling pickups & tracking.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Django", "MySQL", "REST API"],
    category: "Full Stack",
    github: "#",
    live: "https://lumoskart.pythonanywhere.com/"
  },
  {
    title: "Cab Booking Website",
    description: "Responsive UI with dynamic elements for cab booking services.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    tags: ["HTML", "CSS", "JS", "UI/UX"],
    category: "Frontend",
    github: "#",
    live: "https://nabeel165.github.io/ride/"
  },
  {
    title: "AI Chatbot Buddy",
    description: "ChatGPT-inspired conversational interface built with modern AI integration.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "AI", "Frontend"],
    category: "AI",
    github: "#",
    live: "https://ai-chatter-buddy-42.lovable.app/"
  },
  {
    title: "Cafe Landing Page",
    description: "Animated, highly responsive cafe website to showcase products and locations.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
    tags: ["HTML5", "CSS3", "Animations"],
    category: "Frontend",
    github: "#",
    live: "https://cerulean-gaufre-0a5d81.netlify.app/"
  },
  {
    title: "Punyam Astrologer Platform",
    description: "Astrologer e-commerce platform for spiritual products and services.",
    image: punyamImage,
    tags: ["E-commerce", "Web", "Platform"],
    category: "Full Stack",
    github: "#",
    live: "https://punyam.vercel.app/"
  },
  {
    title: "Elaamy Photo Frame Platform",
    description: "Photo frame platform for custom frames and personalized photo products.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    tags: ["E-commerce", "Web", "Platform"],
    category: "Full Stack",
    github: "#",
    live: "https://www.elaamy.com/"
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

        <div className="projects-container">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
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

      {/* Marquee - Full Width */}
      <div className="projects-marquee">
        <div className="marquee-content">
          <span className="marquee-item">Python</span>
          <span className="marquee-item">Django</span>
          <span className="marquee-item">React</span>
          <span className="marquee-item">JavaScript</span>
          <span className="marquee-item">HTML5</span>
          <span className="marquee-item">CSS3</span>
          <span className="marquee-item">MySQL</span>
          <span className="marquee-item">REST API</span>
          <span className="marquee-item">AI</span>
          <span className="marquee-item">E-commerce</span>
          <span className="marquee-item">UI/UX</span>
          <span className="marquee-item">Animations</span>
          <span className="marquee-item">Python</span>
          <span className="marquee-item">Django</span>
          <span className="marquee-item">React</span>
          <span className="marquee-item">JavaScript</span>
          <span className="marquee-item">HTML5</span>
          <span className="marquee-item">CSS3</span>
          <span className="marquee-item">MySQL</span>
          <span className="marquee-item">REST API</span>
          <span className="marquee-item">AI</span>
          <span className="marquee-item">E-commerce</span>
          <span className="marquee-item">UI/UX</span>
          <span className="marquee-item">Animations</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
