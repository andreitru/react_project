import React from 'react';
import styles from './icon.less';
import classNames from 'classnames';
import {BlockIcon} from "./BlockIcon";
import {WarningIcon} from "./WarningIcon";
import {CommentsIcon} from "./CommentsIcon";
import {ShareIcon} from "./ShareIcon";
import {SaveIcon} from "./SaveIcon";
import {MenuIcon} from "./MenuIcon";
import {IconAnon} from "./IconAnon";

export enum EIcons {
  block = 'BlockIcon',
  warning = 'WarningIcon',
  comments = 'CommentsIcon',
  share = 'ShareIcon',
  save = 'SaveIcon',
  menu = 'MenuIcon',
  anon = 'IconAnon'
}

const icons = {
  BlockIcon: <BlockIcon/>,
  WarningIcon: <WarningIcon/>,
  CommentsIcon: <CommentsIcon/>,
  ShareIcon: <ShareIcon/>,
  SaveIcon: <SaveIcon/>,
  MenuIcon: <MenuIcon/>,
  IconAnon: <IconAnon />
}

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface IIconProps {
  name: EIcons;
  size?: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
}

export function Icon(props: IIconProps) {
  const {
    name,
    size,
    mobileSize,
    desktopSize,
    tabletSize
  } = props;

  const classes = classNames(
    {[styles[`s${size}`]]: size},
    {[styles[`m${mobileSize}`]]: mobileSize},
    {[styles[`t${tabletSize}`]]: tabletSize},
    {[styles[`d${desktopSize}`]]: desktopSize},
  )

  return (
    <i className={classes}>
      {icons[name]}
    </i>
  )
}