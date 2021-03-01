import React, {useContext} from 'react';
import styles from './cardslist.less';
import {Card} from "./Card";
import {postsContext} from "../context/postsContext";
import {generateRandomString} from "../../utils/react/generateRandomIndex";

export function CardsList() {
  const {posts} = useContext(postsContext);

  return (
    <ul className={styles.cardList}>
      {posts ? posts.map(post => (
        <Card post={post} key={generateRandomString()}/>
      )) : <p>Загружаются посты</p>}
    </ul>
  );
}
