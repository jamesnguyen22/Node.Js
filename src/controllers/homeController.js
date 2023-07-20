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

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const postCreateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    //let { email, name, city } = req.body;

    // connection.query(
    //     `INSERT INTO Users(email, name, city) 
    //     VALUES(?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         res.send('create user succeed!')
    //     }
    // );

    let [results, fields] = await connection.query(
        `INSERT INTO Users(email, name, city) VALUES(?, ?, ?)`, [email, name, city],
    );

    res.send('Create user succeed !')

    // connection.query(
    //     'select * from Users u',
    //     function (err, results, fields) {
    //         console.log(">>results= ", results);
    //     }
    // );
    // const [results, fields] = await connection.query('select * from Users u');
}

module.exports = {
    getHomepage, getABC, getTest, getCreatePage,
    postCreateUser
}