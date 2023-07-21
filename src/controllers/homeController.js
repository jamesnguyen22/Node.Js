const connection = require('../config/database')
const { getAllUsers, getUserById, createUser, updateUserByID, deleteUserByID } = require('../services/CRUDService')

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
    await createUser(email, name, city);

    res.send('Create user succeed !')


}

const getUpdatePage = async (req, res) => {
    const userID = req.params.id
    let user = await getUserById(userID)
    res.render('edit.ejs', { userEdit: user }) // x <- y
}

const postUpdateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;

    await updateUserByID(email, name, city, userId);

    // res.send('Updated user succeed !')
    res.redirect('/');

}

const postDeleteUser = async (req, res) => {
    const userID = req.params.id
    let user = await getUserById(userID)

    res.render('delete.ejs', { userEdit: user })
}

const postHandleRemoveUser = async (req, res) => {

    let userId = req.body.userId;

    await deleteUserByID(userId);

    // res.send('Updated user succeed !')
    res.redirect('/');
}

module.exports = {
    getHomepage, getABC, getTest, getCreatePage,
    postCreateUser, getUpdatePage, postUpdateUser,
    postDeleteUser, postHandleRemoveUser
}