const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
    // const expressEjsLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000

//DB connections
const mongoose = require('mongoose')
    //connections
const url = 'mongodb://localhoast/food';
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Connection failed...')
});


//Assects
app.use(express.static('public'))

//routes
require('./routes/web.js')(app)


//set Template engine
app.use(expressLayout)
    // app.use(expressEjsLayout);
app.set('views', path.join(__dirname, '/resources/views'))
app.set('views engine', 'ejs')



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})