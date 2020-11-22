import React from 'react';
import styles from './textcontent.less';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar}
               src="https://cdn.dribbble.com/users/32512/avatars/normal/b394be60a32a4c82f89c73b0349af025.png?1556087466"
               alt="avatar"/>
          <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
        </div>
        <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
            4 часа назад
          </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          Следует отметить, что новая модель организационной деятельности Следует отметить, что новая модель
          организационной деятельности Следует отметить, что новая модель организационной деятельности
        </a>
      </h2>
    </div>
  );
}
