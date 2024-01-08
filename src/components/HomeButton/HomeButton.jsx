// HomeButton.jsx
import React, { useState, useEffect } from 'react';
import styles from './HomeButton.module.scss';

const HomeButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowButton(scrollTop > 100); // Adjust the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`${styles.homeButton} ${showButton ? styles.visible : ''}`} onClick={scrollToTop}>
      <i className="fas fa-home"></i>
      Home
    </div>
  );
};

export default HomeButton;
