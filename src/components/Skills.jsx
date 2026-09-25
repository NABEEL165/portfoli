import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayers, FiTool, FiCpu, FiZap } from 'react-icons/fi';
import './Skills.css';

const skillCategories = [
  {
    icon: <FiCode size={28} />,
    title: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "jQuery", level: 80 }
    ]
  },
  {
    icon: <FiLayers size={28} />,
    title: "Frameworks",
    skills: [
      { name: "Django", level: 90 },
      { name: "Django REST", level: 85 },
      { name: "Bootstrap", level: 88 },
      { name: "React", level: 75 },
      { name: "Odoo 17", level: 70 }
    ]
  },
  {
    icon: <FiDatabase size={28} />,
    title: "Database & Tools",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Git", level: 80 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 82 }
    ]
  },
  {
    icon: <FiCpu size={28} />,
    title: "AI & Concepts",
    skills: [
      { name: "AI Integration", level: 75 },
      { name: "REST APIs", level: 90 },
      { name: "UI/UX Design", level: 80 },
      { name: "Agile", level: 85 },
      { name: "System Design", level: 75 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>
          <p className="section-subtitle">My expertise in technologies and tools I work with.</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="category-header">
                <div className="category-icon text-gradient">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-highlights"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="highlight-card glass">
            <div className="highlight-icon">
              <FiZap size={32} />
            </div>
            <div className="highlight-content">
              <h4>Key Highlights</h4>
              <ul className="highlight-list">
                <li>✓ 6+ Full-Stack Projects Delivered</li>
                <li>✓ 2 Live Production Websites</li>
                <li>✓ 2 REST APIs for Web & Mobile</li>
                <li>✓ AI chatbot & Dynamic UI Experiences</li>
                <li>✓ Professional IT Park Experience</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
