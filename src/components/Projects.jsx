import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    number: '01',
    title: 'E-Vikreta Marketplace',
    description:
      'A multi-vendor marketplace that connects local vendors with customers — like Uber for daily essentials. Features real-time order management, vendor dashboards, secure JWT authentication, and WhatsApp Business API notifications.',
    tech: ['React.js', 'Redux', 'Node.js', 'Express', 'MongoDB', 'WhatsApp API'],
    accent: 'violet',
    demoLink: '#',
    codeLink: '#',
  },
  {
    number: '02',
    title: 'Codexa — AI Code Reviewer',
    description:
      'An intelligent code review tool powered by the Gemini AI API. Paste any code snippet and receive instant feedback on quality, security vulnerabilities, performance bottlenecks, and best-practice violations.',
    tech: ['React.js', 'Express.js', 'Gemini API', 'Prism.js'],
    accent: 'blue',
    demoLink: '#',
    codeLink: '#',
  },
  {
    number: '03',
    title: 'This Portfolio',
    description:
      'A performance-optimized, animated portfolio built from scratch — featuring a custom cursor, 3D card tilts, scroll-linked animations, and a WhatsApp-integrated contact form. Zero templates used.',
    tech: ['React.js', 'Framer Motion', 'Vanilla CSS', 'Vite'],
    accent: 'warm',
    demoLink: '#',
    codeLink: '#',
  },
];

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    const inner = card.querySelector('.project-card-inner');
    if (inner) {
      inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    const inner = card.querySelector('.project-card-inner');
    if (inner) {
      inner.style.transform = 'rotateX(0) rotateY(0)';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="project-card glass"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`project-accent project-accent--${project.accent}`} />
      <div className="project-card-inner">
        <div className="project-number">{project.number}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="project-tech-tag">{t}</span>
          ))}
        </div>
        {/* As I don't have live links so thats why i have commented this  */}
        {/* <div className="project-links">
          <a href={project.demoLink} className="project-link hoverable" target="_blank" rel="noreferrer">
            <ExternalLink size={15} /> Live Demo
          </a>
          <a href={project.codeLink} className="project-link hoverable" target="_blank" rel="noreferrer">
            <Code size={15} /> Source Code
          </a>
        </div> */}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="section" id="projects">
      <motion.span
        className="section-label"
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} transition={{ duration: 0.6 }}
      >
        Selected Work
      </motion.span>
      <motion.h2
        className="section-heading"
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }}
      >
        Projects that prove<br />
        <span className="text-gradient">I ship real products.</span>
      </motion.h2>
      <motion.p
        className="section-description"
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }}
      >
        Each project below was built end-to-end — from database design to responsive UI — demonstrating
        full-stack ownership.
      </motion.p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
