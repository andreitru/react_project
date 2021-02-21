import * as React from 'react';
import styles from './menuitemslist.less';
import {EColor, Text} from "../../../../Text";
import classNames from "classnames";
import {EIcons, Icon} from "../../../../Icons";

interface IMenuItemListProps {
  postId: string;
}

export function MenuItemsList({postId}: IMenuItemListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={classNames(styles.menuItem, styles.mobileHide)} onClick={() => console.log(postId)}>
        <Icon name={EIcons.comments} size={14}/>
        <Text size={12} color={EColor.gray99}>
          Комментарии
        </Text>
      </li>
      <div className={classNames(styles.divider, styles.mobileHide)}/>
      <li className={classNames(styles.menuItem, styles.mobileHide)} onClick={() => console.log(postId)}>
        <Icon name={EIcons.share} size={12}/>
        <Text size={12} color={EColor.gray99}>
          Поделиться
        </Text>
      </li>
      <div className={classNames(styles.divider, styles.mobileHide)}/>
      <li className={classNames(styles.menuItem)} onClick={() => console.log(postId)}>
        <Icon name={EIcons.block} size={14}/>
        <Text size={12} color={EColor.gray99}>
          Скрыть
        </Text>
      </li>
      <div className={styles.divider}/>
      <li className={classNames(styles.menuItem, styles.mobileHide)} onClick={() => console.log(postId)}>
        <Icon name={EIcons.save} size={14}/>
        <Text size={12} color={EColor.gray99}>
          Сохранить
        </Text>
      </li>
      <div className={classNames(styles.divider, styles.mobileHide)}/>
      <li className={styles.menuItem}>
        <Icon name={EIcons.warning} size={16}/>
        <Text size={12} color={EColor.gray99}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  )
}