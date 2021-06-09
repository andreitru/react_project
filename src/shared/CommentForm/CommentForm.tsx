import React, {ChangeEvent, FormEvent, useState} from 'react';
import styles from './commentform.less';
import {useStoreon} from "storeon/react";

export function CommentForm() {
  const {dispatch, comment} = useStoreon('comment')
  const [touched, setTouched] = useState(false);
  const [valueError, setValueError] = useState('');

  function validateValue(value: string) {
    if (value.length <= 3) return 'Введите больше 3-х символов';
    return '';
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched(true);
    setValueError(validateValue(comment));

    const isFormValid = !validateValue(comment);
    if (!isFormValid) return;

    alert(comment);
    dispatch('@init');
  }

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
      dispatch('setComment', event.target.value)
    }

  return (
      <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        value={comment}
        onChange={handleChange}
      />
        {touched && valueError && (<div>{valueError}</div>)}
        <button type="submit" className={styles.button}>Комментировать</button>
      </form>
  )
}