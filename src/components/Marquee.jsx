import React from 'react';
import './Marquee.css';

const techs = [
  'React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL',
  'Redux', 'JavaScript ES6+', 'REST APIs', 'JWT Authentication',
  'Azure Cloud', 'Git & GitHub', 'Framer Motion', 'Responsive Design',
  'HTML5 & CSS3', 'Vite', 'Postman', 'Agile / Scrum',
];

const Marquee = () => {
  // Duplicate array for seamless infinite scroll
  const items = [...techs, ...techs];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {items.map((tech, i) => (
          <span key={i} className="marquee-item hoverable">
            <span className="marquee-dot" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
