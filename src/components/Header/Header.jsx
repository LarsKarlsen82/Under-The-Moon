// Header.jsx

import { NavBar } from '../NavBar/NavBar';
import styles from './Header.module.scss';

// Import the hero image
import heroImage from '../../assets/img/Hero_image.jpg';

export const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Hero} style={{ backgroundImage: `url(${heroImage})` }}>
        <h1>Under the Moon</h1>
      </div>
      <NavBar />
    </header>
  );
};
