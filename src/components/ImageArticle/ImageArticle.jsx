// ImageArticle.jsx
import React from 'react';
import styles from './ImageArticle.module.scss';

const ImageArticle = () => {
  return (
    <div className={styles.ImageArticle}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWithText}>
          <img src='src/assets/img/Swim.jpg' alt="Swimming hair" />
          <div className={styles.textContainer}>
            <h2>Exploring Nature</h2>
            <p className={styles.imageP}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Integer ut urna vitae velit sodales fermentum non sit amet quam. 
              <a href="#" className={styles.link}>Read more</a>
            </p>
          </div>
        </div>
        <div className={styles.imageWithText}>
          <img src='src/assets/img/Happy.jpg' alt="Happy woman" />
          <div className={styles.textContainer}>
            <h2>Another Title</h2>
            <p className={styles.imageP}>
              Another set of text for the second image. 
              Integer ut urna vitae velit sodales fermentum non sit amet quam. 
              <a href="#" className={styles.link}>Read more</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageArticle;