import React from 'react';
import styles from './card.less';
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {Menu} from "./Menu";

interface IPost {
  post: {
    data: {
      author: string,
      title: string,
      num_comments: number,
      score: number,
      thumbnail: string,
      sr_detail: {
        icon_img: string,
        banner_img: string
      },
      created_utc: number,
      permalink: string
    }
  };
}

export function Card({post}: IPost) {
  const {
    author,
    title,
    num_comments,
    score,
    thumbnail,
    sr_detail,
    created_utc,
    permalink
  } = post.data

  return (
    <li className={styles.card}>
      <TextContent username={author} title={title} createDate={created_utc} link={permalink} icon={sr_detail}/>
      <Preview thumbnail={thumbnail} banner={sr_detail}/>
      <Menu comments={num_comments} karmaValue={score}/>
    </li>
  );
}
