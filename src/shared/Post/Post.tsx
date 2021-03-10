import React, {useContext, useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import styles from './post.less';
import {CommentForm} from "../CommentForm";
import axios from "axios";
import {tokenContext} from "../context/tokenContext";
import { CommentsList } from '../CommentsList';

interface IPost {
  title?: string;
  selftext?: string;
  url?: string;
  onClose?: () => void;
  postData?: any;
  postId?: string
}

interface IComments {
  comments?: {};
}

export function Post(props: IPost) {
  const [postData, setPostData] = useState<IPost>({title: '', selftext: '', url: ''});
  const [comments, setComments] = useState<IComments>({})
  const token = useContext(tokenContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [])

  useEffect(() => {
    axios.get(`https://oauth.reddit.com/comments/${props.postId}.json?sr_detail=true&limit=20`, {
      headers: {Authorization: `bearer ${token}`}
    })
      .then((resp) => {
        const post = resp.data;
        console.log(post[0].data.children[0].data)
        console.log(post[1].data.children)
        setPostData(post[0].data.children[0].data)
        setComments(post[1].data.children)
      })
      .catch(console.log)
  }, [])

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <h2 className={styles.title}>
        {postData.title}
      </h2>
      <div className={styles.content}>
        {postData.selftext}
        {/jpg|png$/.test(postData.url as string) ? <img src={postData.url} alt='' className={styles.img}/> : null}
      </div>

      <CommentForm/>
      <CommentsList comments={comments}/>
    </div>
  ), node);
}