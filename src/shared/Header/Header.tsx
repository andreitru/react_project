import React, {useEffect} from 'react';
import styles from './header.less';
import {SearchBlock} from "./SearchBlock";
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "./SortBlock";
import {useDispatch} from "react-redux";
import {setToken} from "../../store";

export function Header() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.__token__ !== 'undefined') {
      dispatch(setToken(window.__token__))
    }
  }, [])

  return (
    <header className={styles.header}>
      <SearchBlock/>
      <ThreadTitle/>
      <SortBlock/>
    </header>
  );
}
