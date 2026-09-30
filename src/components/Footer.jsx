import React from 'react';
import { Code, Globe, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          © {year} <a href="#hero">Arbaj Shaikh</a>. Designed & built from scratch.
        </p>
        <div className="footer-links">
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="footer-link hoverable" aria-label="GitHub">
            <Code size={18} />
          </a>
          <a href="https://linkedin.com/in/arbajshaikh" target="_blank" rel="noreferrer" className="footer-link hoverable" aria-label="LinkedIn">
            <Globe size={18} />
          </a>
          <a href="mailto:arbajshaikh5873@gmail.com" className="footer-link hoverable" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
