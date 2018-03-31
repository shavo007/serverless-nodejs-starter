// index.js

import serverless from 'serverless-http';
import express from 'express';
import bodyParser from 'body-parser';
import wiki from './wiki';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/wiki', wiki);

module.exports.handler = serverless(app);
