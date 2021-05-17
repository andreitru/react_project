import {useEffect, useState} from "react";
import axios from "axios";

interface IPostsData {
  posts?: Array<object>;
}

export function usePostsData() {
  const [posts, setPosts] = useState<IPostsData>({});

  useEffect(() => {
    axios.get('https://www.reddit.com/r/popular/best.json?sr_detail=true&limit=10')
      .then((resp) => {
        const postsData = resp.data;
        setPosts({posts: postsData.data.children})
      })
      .catch(console.log)
  }, [])
  return [posts]
}