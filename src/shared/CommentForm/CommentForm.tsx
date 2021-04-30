import React from 'react';
import styles from './commentform.less';

import {Formik, Field, Form} from 'formik';

export function CommentForm() {

  function validateValue(value: string) {
    let error;
    if (value.length <= 3) {
      error = 'Введите больше 3-х символов'
    }
    return error;
  }

  return (
    <Formik
      initialValues={{
        comment: '',
      }}
      onSubmit={(value) => alert(`Комментарий "${value.comment}" отправлен`)}
    >
      {({errors, touched}) => (
        <Form className={styles.form}>
          <Field className={styles.input} as="textarea" name="comment" validate={validateValue}/>
          {errors.comment && touched.comment && <div>{errors.comment}</div>}
          <button type="submit" className={styles.button}>Комментировать</button>
        </Form>
      )}
    </Formik>
  )
}