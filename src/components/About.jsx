import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayers } from 'react-icons/fi';
import './About.css';

const services = [
  {
    icon: <FiCode size={32} />,
    title: "Languages & Frameworks",
    description: "Python, Django, JavaScript, HTML5, CSS3, jQuery, Bootstrap, Django REST Framework."
  },
  {
    icon: <FiDatabase size={32} />,
    title: "Database & Tools",
    description: "MySQL, Git, GitHub, VS Code, Postman, Pythonanywhere, Odoo."
  },
  {
    icon: <FiLayers size={32} />,
    title: "Core Concepts",
    description: "REST APIs, AI Integration, UI/UX Design, Agile Methodologies."
  }
];

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
          <p className="section-subtitle">A brief introduction about who I am and my technical expertise.</p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text glass"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Motivated Python Full Stack Developer</h3>
            <p>
              With a BBA from the University of Calicut, I bring a unique blend of business understanding and technical expertise. I have hands-on experience building scalable web applications, REST APIs, and AI-integrated solutions.
            </p>
            <p>
              During my internship at Empire AE IT Service in Infopark Kochi, I worked on real-time client projects from requirements to deployment. I am highly skilled in Django, MySQL, and modern front-end technologies with a passion for user-focused, innovative digital products.
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="service-icon text-gradient">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
