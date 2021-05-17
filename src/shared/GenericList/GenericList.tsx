import React from 'react';
import styles from './genericlist.less';

interface IItem {
  id: string;
  text: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  icon?: React.ReactNode;
}

interface IGenericListProps {
  list: IItem[];
}

const noop = () => {
};

export function GenericList({list}: IGenericListProps) {
  return (
    <>
      {list.map(({As = 'div', text, onClick = noop, className, id, href, icon}) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {icon}
          {text}
        </As>
      ))}
    </>
  );
}
