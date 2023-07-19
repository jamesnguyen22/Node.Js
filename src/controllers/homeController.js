const connection = require('../config/database')

const getHomepage = (req, res) => {

    return res.render('home.ejs')

    // //Process
    // //Call model
    // let users = []
    // connection.query(
    //     'SELECT * FROM Users u',
    //     function (err, results, fields) {
    //         users = results;
    //         console.log(">> Results: ", results); // results contains rows returned by server

    //         // console.log(">> Check Users: ", users)
    //         res.send(JSON.stringify(users))

    //     }

    // );
}

const getABC = (req, res) => {
    res.send("checkABC")
}

const getTest = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    console.log('>> Results: ', req.body);
    res.send('create a new user')
}

module.exports = {
    getHomepage, getABC, getTest,
    postCreateUser
}