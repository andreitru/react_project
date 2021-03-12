import React from "react";
import {Comment} from './Comment';
import {generateRandomString} from "../../utils/react/generateRandomIndex";

interface ICommentsListProps {
  comments?: any;
}

export function CommentsList(props: ICommentsListProps) {
  const {comments} = props

  return (
    <div>
      {comments.length !== undefined ? comments.map((comment: any) => (
        <Comment author={comment.data.author} text={comment.data.body} key={generateRandomString()}/>
      )) : <p>Загружаются комментарии</p>}
    </div>
  )
}