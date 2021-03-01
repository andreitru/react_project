import React from 'react';
import styles from './textcontent.less';
import {formatDate} from "../../../../utils/js/formatDate";

interface ITextContentProps {
  username: string;
  title: string;
  createDate: number;
  link: string;
  icon: { icon_img: string };
}

export function TextContent({username, title, createDate, link, icon}: ITextContentProps) {
  const postLink = `https://reddit.com${link}`;
  const authorLink = `https://reddit.com/user/${username}`

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar}
               src={icon.icon_img}
               alt="avatar"/>
          <a href={authorLink} target="_blank" className={styles.username}>{username}</a>
        </div>
        <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
          {formatDate(createDate * 1000)}
          </span>
      </div>
      <h2 className={styles.title}>
        <a href={postLink} target="_blank" className={styles.postLink}>
          {title}
        </a>
      </h2>
    </div>
  );
}
