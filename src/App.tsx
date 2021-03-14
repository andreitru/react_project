import React from 'react';
import './main.global.less';
import {hot} from 'react-hot-loader/root';
import {Layout} from './shared/Layout';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {UserContextProvider} from './shared/context/userContext';
import {PostsContextProvider} from "./shared/context/postsContext";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./store/reducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

function AppComponent() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export const App = hot(() => <AppComponent/>);