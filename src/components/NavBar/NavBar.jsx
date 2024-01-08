// NavBar.jsx
import styles from './NavBar.module.scss';

export const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <ul>
        <li><a href="#">Hjem</a></li>
        <li><a href="#">Koncepter</a></li>
        <li><a href="#">UTM Loyalty</a></li>
        <li><a href="#">Om</a></li>
        <li><a href="#">Kontakt</a></li>
      </ul>
    </nav>
  );
};
