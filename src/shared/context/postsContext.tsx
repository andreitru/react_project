import React from "react";
import {usePostsData} from "../../hooks/usePostsData";

interface IPostsContextData {
  posts?: Array<any>;
}

export const postsContext = React.createContext<IPostsContextData>({});

export function PostsContextProvider({children}: { children: React.ReactNode }) {
  const [posts] = usePostsData()

  return (
    <postsContext.Provider value={posts}>
      {children}
    </postsContext.Provider>
  )
}