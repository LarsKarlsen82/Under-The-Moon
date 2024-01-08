// WhiteArticle.jsx
import React from 'react';
import styles from './WhiteArticle.module.scss';

const WhiteArticle = () => {
  return (
    <div className={styles.WhiteArticle}>
      <h2>Another Article Title</h2>
      <p className={styles.paragraph}>
        Another article content goes here. You can customize it as needed.
      </p>
    </div>
  );
};

export default WhiteArticle;
