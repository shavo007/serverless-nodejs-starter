// wiki.js - Wiki route module.
import express from 'express'

const router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('Wiki home page');
})

// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
})

router.post('/', (req, res) => {
    console.log(`body is ${req.body}`);
    res.status(201).json({status: 'created'})

})

export default router;
