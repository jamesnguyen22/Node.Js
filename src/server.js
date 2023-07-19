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

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config template engine
configViewEngine(app);

//declare route
app.use('/', webRoutes);

//test connection



app.listen(port, host_name, () => {
    console.log(`Example app listening on port ${port}`)
})