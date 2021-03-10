import React, {useState} from 'react';
import styles from './textcontent.less';
import {formatDate} from "../../../../utils/js/formatDate";
import {Post} from "../../../Post";

interface ITextContentProps {
  username: string;
  title: string;
  createDate: number;
  postId: string;
  icon: { icon_img: string };
}

export function TextContent({username, title, createDate, postId, icon}: ITextContentProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);


  const authorLink = `https://reddit.com/user/${username}`;


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
        <a href="#post-url" className={styles.postLink} onClick={() => {setIsModalOpened(true)}}>
          {title}
        </a>

        {isModalOpened && (
          <Post
            postId={postId}
            onClose={() => {setIsModalOpened(false);}}
          />
        )}
      </h2>
    </div>
  );
}
