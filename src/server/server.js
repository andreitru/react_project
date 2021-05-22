import express from 'express';
import ReactDom from 'react-dom/server';
import {App} from '../App';
import {indexTemplate} from './indexTemplate';
import axios from 'axios';

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=https://react-skillbox.herokuapp.com/auth`,
    {
      auth: {username: process.env.CLIENT_ID, password: process.env.SECRET},
      headers: {'Content-type': 'application/x-www-form-urlencoded'}
    }
  )
    .then(({data}) => {
      res.send(
        indexTemplate(ReactDom.renderToString(App()), data['access_token']),
      );
    })
    .catch(console.log);

});

app.get('*', (req, res) => {
  res.send(
    indexTemplate(ReactDom.renderToString(App())),
  );
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});