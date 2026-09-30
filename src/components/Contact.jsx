import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageCircle, Mail, Globe, CheckCircle2 } from 'lucide-react';
import './Contact.css';

// ⚠️ REPLACE with your actual WhatsApp number (with country code, no + or spaces)
const WHATSAPP_NUMBER = '917387779339';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Arbaj! I'm ${formData.name}.\n\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="section" id="contact">
      <motion.span
        className="section-label"
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.span>
      <motion.h2
        className="section-heading"
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }}
      >
        Have a project?<br />
        <span className="text-gradient">Let's make it happen.</span>
      </motion.h2>

      <div className="contact-wrapper">
        {/* Left — info + channels */}
        <motion.div
          className="contact-info"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>I'd love to hear about your next project.</h3>
          <p>
            Whether you need a full website built from scratch, a responsive redesign,
            or ongoing development support — I'm here to help. Fill out the form or
            reach me directly through any of these channels.
          </p>

          <div className="contact-channels">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="contact-channel glass hoverable"
            >
              <div className="contact-channel-icon contact-channel-icon--whatsapp">
                <MessageCircle size={20} />
              </div>
              <div className="contact-channel-text">
                <h4>WhatsApp</h4>
                <p>Quick response within hours</p>
              </div>
            </a>

            <a
              href="mailto:arbajshaikh5873@gmail.com"
              className="contact-channel glass hoverable"
            >
              <div className="contact-channel-icon contact-channel-icon--email">
                <Mail size={20} />
              </div>
              <div className="contact-channel-text">
                <h4>Email</h4>
                <p>arbajshaikh5873@gmail.com</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/arbajshaikh"
              target="_blank"
              rel="noreferrer"
              className="contact-channel glass hoverable"
            >
              <div className="contact-channel-icon contact-channel-icon--linkedin">
                <Globe size={20} />
              </div>
              <div className="contact-channel-text">
                <h4>LinkedIn</h4>
                <p>Let's connect professionally</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          className="contact-form-panel glass"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} transition={{ duration: 0.6, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                className="form-success"
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <CheckCircle2 size={48} className="form-success-icon" />
                <h3>Message Sent!</h3>
                <p>WhatsApp should have opened with your message. I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <motion.form
                className="contact-form"
                onSubmit={handleSubmit}
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Your Name</label>
                  <input
                    className="form-input"
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email Address</label>
                  <input
                    className="form-input"
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Tell me about your project</label>
                  <textarea
                    className="form-textarea"
                    id="contact-message"
                    name="message"
                    required
                    placeholder="I need a website for my business that..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="submit-btn hoverable">
                  <div className="submit-btn-bg" />
                  <span className="submit-btn-content">
                    <Send size={18} />
                    Send via WhatsApp
                  </span>
                </button>

                <div className="whatsapp-badge">
                  <MessageCircle size={14} />
                  <span>Opens WhatsApp with your pre-filled message</span>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
