const express = require('express');  //common js
const path = require('path');

const app = express()   //app express
const port = 3000       //port

//config template engine
app.set('views', path.join(__dirname, 'views'));
// app.set('views', './views/')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.send('Check abc')
})

app.get('/test', (req, res) => {
    // res.send('sample.ejs')
    res.render('sample.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})