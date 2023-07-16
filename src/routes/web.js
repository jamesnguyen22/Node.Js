const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World with nodemon')
})

router.get('/abc', (req, res) => {
    res.send('Check abc')
})

router.get('/test', (req, res) => {
    // res.send('sample.ejs')
    res.render('sample.ejs')
})

module.exports = router;  //export default