const express = require('express');
const { getHomepage, getABC, getTest } = require('../controllers/homeController');
const router = express.Router();

// router.get('/', (req, res) => {
//     //Process data
//     res.send('Hello World with nodemon')
// })

router.get('/', getHomepage)

router.get('/abc', getABC)

// router.get('/test', (req, res) => {
//     // res.send('sample.ejs')
//     res.render('sample.ejs')
// })

router.get('/test', getTest)

module.exports = router;  //export default