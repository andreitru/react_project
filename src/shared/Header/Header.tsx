import React, {useEffect} from 'react';
import styles from './header.less';
import {SearchBlock} from "./SearchBlock";
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "./SortBlock";
import {useDispatch} from "react-redux";
import {saveToken} from "../../store/token/actions";

export function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(saveToken())
  }, [])

  return (
    <header className={styles.header}>
      <SearchBlock/>
      <ThreadTitle/>
      <SortBlock/>
    </header>
  );
}
