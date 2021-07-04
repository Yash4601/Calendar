require("dotenv").config();
const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const calendarRoutes = require('./routes/calendar');

// app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use(calendarRoutes);

mongoose.connect(
    process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
.then(result => {
    app.listen(3000, (req, res, next) => {
        console.log('Server started on port 3000');
    })
})
.catch(err => {
    console.log(err);
})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to mongoDB');
});