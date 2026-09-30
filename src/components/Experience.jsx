import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Database, BookOpen } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    date: 'Present',
    title: 'Associate Software Engineer',
    company: 'iProgrammer',
    points: [
      'Building scalable web applications using the MERN stack for production environments',
      'Collaborating with cross-functional teams on agile software delivery',
      'Writing clean, maintainable, and well-documented code following industry best practices',
    ],
  },
  {
    date: '2023 — 2024',
    title: 'Programming Instructor',
    company: 'Rajesh Jain Academy',
    points: [
      'Taught Java OOP, React.js, and Web Technology fundamentals to 100+ students',
      'Created structured lesson plans and hands-on coding exercises',
      'Mentored students through debugging, project planning, and interview preparation',
    ],
  },
];

const certifications = [
  { icon: ShieldCheck, title: 'Microsoft Azure Fundamentals', org: 'Microsoft (AZ-900)' },
  { icon: BookOpen, title: 'Java OOP & Web Technology', org: 'Rajesh Jain Academy' },
  { icon: Database, title: 'AI-Powered Full-Stack Web Development', org: 'AccioJob' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <section className="section" id="experience">
      <motion.span
        className="section-label"
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} transition={{ duration: 0.6 }}
      >
        Experience & Credentials
      </motion.span>
      <motion.h2
        className="section-heading"
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }}
      >
        Where I've worked<br />
        <span className="text-gradient">and what I've earned.</span>
      </motion.h2>

      <div className="experience-timeline">
        {experiences.map((exp, i) => (
          <motion.div
            className="timeline-item"
            key={exp.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="timeline-dot" />
            <div className="timeline-date">{exp.date}</div>
            <div className="timeline-card glass">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <ul>
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div
        className="certifications"
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="section-heading" style={{ fontSize: '1.6rem' }}>Certifications</h3>
        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <motion.div
              className="cert-card glass"
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="cert-icon">
                <cert.icon size={20} />
              </div>
              <div className="cert-info">
                <h4>{cert.title}</h4>
                <p>{cert.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
