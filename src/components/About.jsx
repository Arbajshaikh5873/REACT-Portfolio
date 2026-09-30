import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const stats = [
  { number: 2, suffix: '+', label: 'Years Experience' },
  { number: 5, suffix: '+', label: 'Projects Shipped' },
  { number: 200, suffix: '+', label: 'DSA Problems Solved' },
  { number: 3, suffix: '', label: 'Certifications Earned' },
];

const skillCategories = [
  {
    label: 'Frontend',
    skills: ['React.js', 'Redux', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'MongoDB', 'MySQL'],
  },
  {
    label: 'Tools & Cloud',
    skills: ['Git & GitHub', 'Azure (AZ-900)', 'Vercel', 'Postman', 'VS Code', 'npm'],
  },
];

/* Animated counter hook */
const useCounter = (end, inView) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const startTime = performance.now();
    const step = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, inView]);
  return count;
};

const StatCard = ({ number, suffix, label, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const count = useCounter(number, inView);

  return (
    <motion.div
      ref={ref}
      className="stat-card glass"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="stat-number text-gradient">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
};

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="section about" id="about">
      <motion.span
        className="section-label"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.span>
      <motion.h2
        className="section-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Engineer by degree.<br />
        <span className="text-gradient">Developer by passion.</span>
      </motion.h2>

      <div className="about-grid">
        {/* Left — Bio + Stats */}
        <div>
          <motion.div
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm <strong>Arbaj Shaikh</strong>, a Full-Stack Developer with a B.E. in Electronics
              & Telecommunication and a sharp focus on the <strong>MERN stack</strong>. I don't just
              write code — I architect scalable, maintainable solutions that solve real business problems.
            </p>
            <p>
              My flagship project <strong>E-Vikreta</strong> connected local vendors to customers
              (think Uber for daily essentials), handling real-time order flows, multi-vendor
              catalogs, and WhatsApp Business API integrations. I also built <strong>Codexa</strong>, an
              AI-powered code reviewer using the Gemini API.
            </p>
            <p>
              Beyond building, I've taught 100+ students at <strong>Rajesh Jain Academy</strong>,
              sharpening my ability to communicate complex ideas simply — a skill that directly
              translates to clear client communication and collaborative teamwork.
            </p>
          </motion.div>

          <div className="stats-grid">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} {...stat} index={i} />
            ))}
          </div>
        </div>

        {/* Right — Skills */}
        <motion.div
          className="skills-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="skills-header">Tech Stack</h3>
          {skillCategories.map((cat) => (
            <div key={cat.label} className="skill-category">
              <div className="skill-category-label">{cat.label}</div>
              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-tag glass hoverable">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
