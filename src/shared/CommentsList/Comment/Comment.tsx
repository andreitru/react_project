import React, {ChangeEvent, FormEvent, useRef, useState} from "react";
import styles from "./comment.less";
import {EIcons, Icon} from "../../Icons";


interface ICommentProps {
  text?: string;
  author?: string;
}

export function Comment(props: ICommentProps) {
  const {author, text} = props;
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [comment, setComment] = useState('');
  const ref = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsFormVisible(false);
    console.log(comment);
    setComment(`${author}, `);
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setComment(event.target.value);
  }

  function handleReply() {
    setIsFormVisible(true)
    setTimeout(() => {
      ref.current?.focus();
      setComment(`${author}, `);
    }, 0)

  }

  return (
    <>
      {author ?
        <div className={styles.comment}>
          <span className={styles.author}>{author}</span>
          <p className={styles.text}>{text}</p>
          <button className={styles.btnReply} onClick={handleReply}
                  style={!isFormVisible ? {display: 'flex'} : {display: 'none'}}>
            <Icon name={EIcons.comments} size={14}/>
            Ответить
          </button>
          <form onSubmit={handleSubmit} className={styles.form}
                style={isFormVisible ? {display: 'flex'} : {display: 'none'}}
          >
            <textarea className={styles.textarea} onChange={handleChange} value={comment} ref={ref}/>
            <button className={styles.btnComment} type='submit'>Ответить</button>
          </form>
        </div>
        : null}
    </>
  );
}