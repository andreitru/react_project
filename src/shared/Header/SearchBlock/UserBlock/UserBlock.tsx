import React from 'react';
import styles from "./userblock.less";
import {EColor, Text} from "../../../Text";
import {Break} from "../../../Break";
import {IconAnon} from "../../../Icons";


interface IUserBlockProps {
  avatarSrc?: string
  username?: string
  loading?: boolean
}

export function UserBLock({avatarSrc, username, loading}: IUserBlockProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=J33HZq43yS9ocA&response_type=code&state=random_string&redirect_uri=https://react-skillbox.herokuapp.com/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}
    >
      <div className={styles.userBox}>
        <div className={styles.avatarBox}>
          {avatarSrc
            ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage}/>
            : <IconAnon/>
          }
        </div>

        <div className={styles.username}>
          <Break size={12}/>
          {loading ? (
            <Text size={20} color={EColor.gray99}>Загрузка...</Text>
          ) : (
            <Text size={20} color={username ? EColor.black : EColor.gray99}>{username || 'Аноним'}</Text>
          )}
        </div>
      </div>
    </a>
  );
}
