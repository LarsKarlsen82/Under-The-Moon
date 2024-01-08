// MultiImageArticle.jsx
import React from 'react';
import styles from './MultiImageArticle.module.scss';

const MultiImageArticle = () => {
  return (
    <div className={styles.MultiImageArticle}>
            <h2>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          Follow us on instagram
        </a>
      </h2>
      <div className={styles.imageGrid}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className={styles.imageContainer}>
            <img
              src={`src/assets/img/Hair${index + 1}.jpg`}
              alt={`Hair ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiImageArticle;
