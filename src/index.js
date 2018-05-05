// index.js

import serverless from 'serverless-http'
import express from 'express'
import wiki from './wiki'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/wiki', wiki)

module.exports.handler = serverless(app)
