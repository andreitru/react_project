import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import styles from './post.less';
import axios from "axios";
import {CommentsList} from '../CommentsList';
import {CommentFormContainer} from "../CommentFormContainer";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducer";
import {useHistory} from 'react-router-dom';

interface IPost {
  title?: string;
  selftext?: string;
  url?: string;
  // onClose?: () => void;
  postData?: any;
  postId?: string
}

interface IComments {
  comments?: {};
}

export function Post(props: IPost) {
  const [postData, setPostData] = useState<IPost>({title: '', selftext: '', url: ''});
  const [comments, setComments] = useState<IComments>({})
  const token = useSelector<RootState, string>(state => state.token.token);
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        history.push('/posts');
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [])

  useEffect(() => {
    const id = document.location.href.split('/posts/')[1];

    axios.get(`https://oauth.reddit.com/comments/${id}.json?sr_detail=true&limit=20`, {
      headers: {Authorization: `bearer ${token}`}
    })
      .then((resp) => {
        const post = resp.data;
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

      <CommentFormContainer/>
      <CommentsList comments={comments}/>
    </div>
  ), node);
}