import React from 'react';
import styles from './preview.less';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img src="https://cdn.dribbble.com/users/938871/screenshots/11351739/saturday-stroll---brad-cuzen.jpg"
           alt="preview" className={styles.previewImg}/>
    </div>
  );
}
