// wiki.js - Wiki route module.
import express from 'express'
import logger from './logger'

const router = express.Router()

// Home page route.
router.get('/', (req, res) => {
	res.send('Wiki home page')
})

// About page route.
router.get('/about', (req, res) => {
	logger.info(`about...`)
	res.send('About this wiki')
})

router.post('/', (req, res) => {
	console.log(`body is ${req.body}`)
	res.status(201).json({ status: 'created' })
})

export default router
