import React from 'react';
import styles from './searchblock.less';
import {UserBLock} from "./UserBlock";
import {useUserData} from "../../../hooks/useUserData";

export function SearchBlock() {
  const {data, loading} = useUserData()

  return (
    <div className={styles.searchBlock}>
      <UserBLock avatarSrc={data.iconImg} username={data.name} loading={loading}/>
    </div>
  );
}
