import React, { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const closeMobile = () => setMobileOpen(false);

  return (
    <motion.nav
      className="navbar glass"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo hoverable">
          arbaj<span>.dev</span>
        </a>

        {/* Desktop links */}
        <div className="navbar-links navbar-links--desktop">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="navbar-link hoverable">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="navbar-cta hoverable">
            Let's Talk
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="navbar-hamburger hoverable"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar-mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="navbar-mobile-link"
                onClick={closeMobile}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="navbar-cta" onClick={closeMobile}>
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="scroll-progress" style={{ scaleX }} />
    </motion.nav>
  );
};

export default Navbar;
