import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, FileDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section className="hero" id="hero">
      {/* Gradient orbs */}
      <div className="hero-orb hero-orb--1" />
      <div className="hero-orb hero-orb--2" />
      <div className="hero-orb hero-orb--3" />

      <div className="hero-content">
        <motion.div
          className="hero-eyebrow"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <span className="hero-eyebrow-dot" />
          Available for Freelance Projects
        </motion.div>

        <motion.h1
          className="hero-heading"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <span className="hero-heading-line">I build digital</span>
          <span className="hero-heading-line text-gradient">experiences that</span>
          <span className="hero-heading-line">convert & scale.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Full-Stack MERN Developer crafting high-performance web applications.
          From concept to deployment — I transform ideas into polished, production-ready products.
        </motion.p>

        <motion.div
          className="hero-actions"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <a href="#contact" className="hero-btn hero-btn--primary hoverable">
            <Sparkles size={18} />
            Start a Project
          </a>
          <a href="#projects" className="hero-btn hero-btn--secondary hoverable">
            View My Work
          </a>
          <a
            href="/Arbaj_Shaikh_Resume.pdf"
            download
            className="hero-btn hero-btn--secondary hoverable"
          >
            <FileDown size={18} />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </motion.div>
    </section>
  );
};

export default Hero;
