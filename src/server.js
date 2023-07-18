require('dotenv').config()
const express = require('express');  //common js
const { hostname } = require('os');
// const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')

// get the client
const mysql = require('mysql2');

const app = express();   //app express
const port = process.env.PORT || 8080       //port => hard code
const host_name = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//declare route
app.use('/', webRoutes);

//test connection
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'james'
});

// simple query
connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log(">> Results: ", results); // results contains rows returned by server
        console.log(">> Fields: ", fields); // fields contains extra meta data about results, if available
    }
);

app.listen(port, host_name, () => {
    console.log(`Example app listening on port ${port}`)
})