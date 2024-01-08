// Footer.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.scss';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); // New state for confirmation

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setSubmitted(false); // Reset confirmation when changing input
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform form submission or other actions here
      console.log('Form submitted:', formData);
      setSubmitted(true); // Set confirmation state to true
    }
  };

  return (
    <footer className={styles.Footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 style={{ marginLeft: '2em' }}>SUBSCRIBE TO NEWSLETTER</h3>
          <form onSubmit={handleSubmit}>
            {submitted ? (
              <p style={{ color: '#ffd700' }}>Thank you for subscribing!</p>
            ) : (
              <>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.labelInsideInput}>
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.labelInsideInput}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
                <button type="submit">SIGN UP</button>
              </>
            )}
          </form>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul className={styles.quickLinks}>
            <li><a href="/">Hjem</a></li>
            <li><a href="/services">Om os</a></li>
            <li><a href="/gallery">Prisliste</a></li>
            <li><a href="/contact">Booking</a></li>
            <li><a href="/contact">Newsletter</a></li>
            <li><a href="/contact">Kontakt</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Follow Us</h3>
          <div className={styles.followUsIcons}>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="3x"/>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="3x"/>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="3x"/>
            </a>
          </div>
        </div>
        <div className={`${styles.footerSection} ${styles.findUsSection}`}>
          <h3>Find Us</h3>
          <p>WhatsApp</p>
          <p> + 45 23 43 43 43</p>
          <p>Telefonnummer</p>
          <p>+45 58 84 84 84</p>
          <p>Address</p>
          <p>Supergatan 56,</p>
          <p>Oslo, Norway</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; Lars Karlsen, Tech College Aalborg, 2024 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
