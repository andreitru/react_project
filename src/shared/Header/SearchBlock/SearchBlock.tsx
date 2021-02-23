import React from 'react';
import styles from './searchblock.less';
import {UserBLock} from "./UserBlock";

export function SearchBlock() {
  return (
    <div className={styles.searchBlock}>
      <UserBLock />
    </div>
  );
}
