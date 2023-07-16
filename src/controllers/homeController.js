const getHomepage = (req, res) => {
    //Process
    //Call model
    res.send('Hello World with nodemon')
}

const getABC = (req, res) => {
    res.send("checkABC")
}

const getTest = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC, getTest
}