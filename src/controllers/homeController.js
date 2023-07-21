const connection = require('../config/database')
const { getAllUsers } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results }) // x <- y

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



    let [results, fields] = await connection.query(
        `INSERT INTO Users(email, name, city) VALUES(?, ?, ?)`, [email, name, city],
    );

    res.send('Create user succeed !')


}

const getUpdatePage = (req, res) => {
    res.render('edit.ejs')
}

module.exports = {
    getHomepage, getABC, getTest, getCreatePage,
    postCreateUser, getUpdatePage
}