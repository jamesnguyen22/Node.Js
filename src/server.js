const express = require('express');  //common js
const { hostname } = require('os');
const path = require('path');
require('dotenv').config()

//import express from 'express';
// console.log(">> check env: ", process.env);

const app = express();   //app express
const port = process.env.PORT || 8080       //port => hard code
const host_name = process.env.HOST_NAME;

//config template engine
app.set('views', path.join(__dirname, 'views'));
// app.set('views', './views/')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Hello World with nodemon')
})

app.get('/abc', (req, res) => {
    res.send('Check abc')
})

app.get('/test', (req, res) => {
    // res.send('sample.ejs')
    res.render('sample.ejs')
})

app.listen(port, host_name, () => {
    console.log(`Example app listening on port ${port}`)
})