import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import './Experience.css';

const experiences = [
  {
    title: "Python Full Stack Developer",
    company: "Empire AE IT Service",
    location: "Infopark, Kochi, Kerala",
    period: "8 Months",
    type: "Internship",
    description: "Worked on real-time client projects from requirements to deployment in a professional IT park environment.",
    achievements: [
      "Built and deployed full-stack Django web applications with MySQL backends",
      "Developed and integrated REST APIs consumed by web and mobile clients",
      "Collaborated in Agile team environment with professional developers",
      "Delivered production-ready solutions for real clients"
    ],
    technologies: ["Django", "Python", "MySQL", "REST API", "Git", "Agile"]
  },
  {
    title: "Full Stack Web Development",
    company: "G-TEC Computer Education",
    location: "Palakkad, Kerala",
    period: "2023 - 2024",
    type: "Certification",
    description: "Comprehensive training in full-stack web development with hands-on project experience.",
    achievements: [
      "Mastered front-end technologies: HTML, CSS, JavaScript, jQuery, Bootstrap",
      "Developed strong back-end skills with Python and Django",
      "Built multiple full-stack projects from scratch",
      "Gained expertise in database management with MySQL"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Django", "MySQL"]
  },
  {
    title: "Bachelor of Business Administration",
    company: "University of Calicut",
    location: "Kerala, India",
    period: "2022 - 2025",
    type: "Education",
    description: "BBA degree with focus on business fundamentals and programming foundations.",
    achievements: [
      "Developed strong foundation in business management and principles",
      "Gained programming skills through academic projects",
      "Completed multiple full-stack web projects",
      "Built system design and database management expertise"
    ],
    technologies: ["Programming", "System Design", "DB Management", "Web Development"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience & <span className="text-gradient">Education</span></h2>
          <p className="section-subtitle">My professional journey and academic background.</p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-content glass">
                <div className="timeline-header">
                  <div className="timeline-icon">
                    <FiBriefcase size={24} />
                  </div>
                  <div className="timeline-title-group">
                    <h3>{exp.title}</h3>
                    <p className="company-name">{exp.company}</p>
                  </div>
                  <span className={`timeline-badge ${exp.type.toLowerCase()}`}>
                    {exp.type}
                  </span>
                </div>

                <div className="timeline-meta">
                  <div className="meta-item">
                    <FiCalendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="meta-item">
                    <FiMapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="timeline-description">{exp.description}</p>

                <div className="timeline-achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>
                        <FiCheckCircle size={16} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="timeline-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
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

export default Experience;
