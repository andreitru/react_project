import React from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.less';

interface IDropdownProps {
  children: React.ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
  setIsDropdownOpen?: any;
  coords?: any;
  isDropdownOpen?: boolean
}

export function Dropdown({children, coords, setIsDropdownOpen, isDropdownOpen}: IDropdownProps) {

  const node = document.querySelector('#dropdown_root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.container}
         style={{
           left: `${coords.left}px`,
           top: `${coords.top}px`
         }}>
      <div className={styles.listContainer}>
        <div className={styles.list} onClick={() => setIsDropdownOpen(isDropdownOpen)}>
          {children}
        </div>
      </div>
    </div>
  ), node);
}
