import React, {useContext} from 'react';
import styles from './searchblock.less';
import {UserBLock} from "./UserBlock";
import {userContext} from "../../context/userContext";

export function SearchBlock() {
  const {iconImg, name} = useContext(userContext)

  return (
    <div className={styles.searchBlock}>
      <UserBLock avatarSrc={iconImg} username={name}/>
    </div>
  );
}
