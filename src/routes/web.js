const express = require('express');
const { getHomepage, getABC, getTest, getCreatePage, postCreateUser, getUpdatePage, } = require('../controllers/homeController');
const router = express.Router();

// router.get('/', (req, res) => {
//     //Process data
//     res.send('Hello World with nodemon')
// })

router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/test', getTest)
router.get('/create', getCreatePage)
router.post('/create-user', postCreateUser);
router.get('/update/:id', getUpdatePage)
// router.post('/edit-user', postEditUser);


module.exports = router;  //export default