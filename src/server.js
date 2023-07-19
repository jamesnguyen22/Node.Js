require('dotenv').config()
const express = require('express');  //common js
const { hostname } = require('os');
// const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')
const connection = require('./config/database');



const app = express();   //app express
const port = process.env.PORT || 8080       //port => hard code
const host_name = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//declare route
app.use('/', webRoutes);

//test connection


// simple query
// connection.query(
//     'SELECT * FROM Users u',
//     function (err, results, fields) {
//         console.log(">> Results: ", results); // results contains rows returned by server
//         // console.log(">> Fields: ", fields); // fields contains extra meta data about results, if available
//     }
// );

app.listen(port, host_name, () => {
    console.log(`Example app listening on port ${port}`)
})