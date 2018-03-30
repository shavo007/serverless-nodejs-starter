// index.js

import serverless from 'serverless-http'
import express from 'express'
import bodyParser  from 'body-parser';
import wiki from './src/wiki'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/wiki', wiki);

app.get('/', async (req, res) => {
  res.status(200).json({title: `Hello World! ${(await message({ time: 1, copy: 'Your function executed successfully!'}))}` })
})

const message = ({ time, ...rest }) => new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(`${rest.copy} (with a delay)`);
  }, time * 1000)
);

module.exports.handler = serverless(app);
