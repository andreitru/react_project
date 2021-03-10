import React, {useState} from 'react';
import './main.global.less';
import {hot} from 'react-hot-loader/root';
import {Layout} from './shared/Layout';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {useToken} from "./hooks/useToken";
import {tokenContext} from "./shared/context/tokenContext";
import {UserContextProvider} from './shared/context/userContext';
import {PostsContextProvider} from "./shared/context/postsContext";
import {commentContext} from "./shared/context/commentContext";

function AppComponent() {
  const [token] = useToken();
  const [commentValue, setCommentValue] = useState('');

  const CommentProvider = commentContext.Provider;

  return (
    <CommentProvider value={{
      value: commentValue,
      onChange: setCommentValue,
    }}>
      <tokenContext.Provider value={token}>
        <UserContextProvider>
          <Layout>
            <Header/>
            <Content>
              <PostsContextProvider>
                <CardsList/>
              </PostsContextProvider>
            </Content>
          </Layout>
        </UserContextProvider>
      </tokenContext.Provider>
    </CommentProvider>
  );
}

export const App = hot(() => <AppComponent/>);