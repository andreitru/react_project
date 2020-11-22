import React from 'react';
import styles from './card.less';
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {Menu} from "./Menu";

export function Card() {
  return (
    <li className={styles.card}>
      <TextContent/>
      <Preview/>
      <Menu/>
    </li>
  );
}
