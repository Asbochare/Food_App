function homecontroller() {
    //factory function
    return {
        index(req, res) {

            res.render('home.ejs')

        }
    }

}

module.exports = homecontroller