import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Smartphone, Wrench } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Monitor,
    color: 'violet',
    title: 'Frontend Development',
    description: 'Pixel-perfect, responsive interfaces built with React.js that load fast and look stunning on every device.',
    features: ['React.js / Next.js SPAs', 'Smooth CSS animations', 'Mobile-first responsive', 'Cross-browser tested'],
  },
  {
    icon: Server,
    color: 'blue',
    title: 'Backend & API Development',
    description: 'Secure, scalable REST APIs and server-side logic built with Node.js, Express, and MongoDB/MySQL.',
    features: ['RESTful API design', 'JWT authentication', 'Database architecture', 'Third-party integrations'],
  },
  {
    icon: Smartphone,
    color: 'cyan',
    title: 'Full Website — End to End',
    description: 'Complete websites from concept to deployment. You give me the idea, I deliver a production-ready product.',
    features: ['UI/UX implementation', 'Admin dashboards', 'Payment integrations', 'Hosting & deployment'],
  },
  {
    icon: Wrench,
    color: 'emerald',
    title: 'Bug Fixing & Optimization',
    description: 'Got an existing website that needs work? I debug issues, optimize performance, and add new features.',
    features: ['Performance audits', 'Bug diagnosis & fixing', 'SEO optimization', 'Code refactoring'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section className="section" id="services">
      <motion.span
        className="section-label"
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} transition={{ duration: 0.6 }}
      >
        What I Offer
      </motion.span>
      <motion.h2
        className="section-heading"
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }}
      >
        Services tailored to<br />
        <span className="text-gradient">your business needs.</span>
      </motion.h2>
      <motion.p
        className="section-description"
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }}
      >
        Whether you're a startup launching your first product or an established business
        looking to go digital — I have a solution for you.
      </motion.p>

      <div className="services-grid">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="service-card glass"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={`service-icon service-icon--${service.color}`}>
              <service.icon size={26} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-features">
              {service.features.map((f) => (
                <span key={f} className="service-feature">{f}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="services-cta"
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} transition={{ duration: 0.6, delay: 0.4 }}
      >
        <span className="services-cta-text">Ready to start?</span>
        <a href="#contact" className="hero-btn hero-btn--primary hoverable" style={{ padding: '12px 28px', fontSize: '0.9rem' }}>
          Get a Free Quote
        </a>
      </motion.div>
    </section>
  );
};

export default Services;
