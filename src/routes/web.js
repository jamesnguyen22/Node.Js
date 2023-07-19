const express = require('express');
const { getHomepage, getABC, getTest, postCreateUser } = require('../controllers/homeController');
const router = express.Router();

// router.get('/', (req, res) => {
//     //Process data
//     res.send('Hello World with nodemon')
// })

router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/test', getTest)

router.post('/create-user', postCreateUser);


module.exports = router;  //export default