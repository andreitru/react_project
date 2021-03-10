import React, {ChangeEvent, FormEvent, useContext} from 'react';
import styles from './commentform.less';
import {commentContext} from "../context/commentContext";
import {userContext} from "../context/userContext";

export function CommentForm() {
  const {value, onChange} = useContext(commentContext);
  const userName = useContext(userContext);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={value} onChange={handleChange} placeholder={`${userName.name}, оставьте ваш комментарий`}/>
      <button className={styles.button} type='submit'>Комментировать</button>
    </form>
  )
}