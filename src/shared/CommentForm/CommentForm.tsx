import React, {ChangeEvent, FormEvent} from 'react';
import styles from './commentform.less';

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent) => void;
}

export function CommentForm({value, onChange, onSubmit}: Props) {

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <textarea className={styles.input} value={value} onChange={onChange}
        // placeholder={`${userName.name}, оставьте ваш комментарий`}
      />
      <button className={styles.button} type='submit'>Комментировать</button>
    </form>
  )
}