const path = require('path');
const express = require('express');
const configViewEngine = (app) => {

    //console.log(">>> check __dirname: ", path.join('./src', 'public')) //check

    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs')

    //config static files
    // app.use(express.static('public'))
    app.use(express.static(path.join('./src', 'public')))
}

module.exports = configViewEngine;