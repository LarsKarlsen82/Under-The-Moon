// Main.jsx
import React from 'react';
import styles from './Main.module.scss';
import WhiteArticle from '../WhiteArticle/WhiteArticle';

const Main = () => {
  return (
    <>
      <div className={styles.TransparentArticle}>
        <h2>Hairstylist og frisør</h2>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet. Qui voluptas autem et error debitis et dolores velit et illum
          aliquam. Et error quis sit iure libero et minus alias quo nobis reiciendis et sint maxime
          hic voluptatem autem! Ad architecto unde ea aspernatur dignissimos qui corporis expedita
          ut consequatur aliquid et repudiandae enim. Et temporibus accusamus est consectetur dolores
          sit labore tenetur vel tempore adipisci!
        </p>
      </div>

      <WhiteArticle />
    </>
  );
};

export default Main;
