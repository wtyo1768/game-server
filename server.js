const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const config = require("./Config/config.js");

//const url = `mongodb://${config.mongodb.user}:${config.mongodb.password}@${config.mongodb.host}/${config.mongodb.database}`;
const url = `mongodb+srv://wtyo1768:s124930654@kyronus-dihrd.mongodb.net/test?retryWrites=true`

const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

mongoose.connect(url, { useNewUrlParser: true });

mongoose.Promise = global.Promise;

app.listen(port, () => console.log('App listening on port ' + port));

app.use(express.static('public'));

app.use(cors());
//For Preflight request 
app.options('*', cors({ maxAge: 600 }));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.text())

app.use(cookieParser());

app.use(function (req, res, next) {
    if (req.method == "GET")
        return next();
    req.body = JSON.parse(req.body)
    next();
})

app.get('', (req, res) => res.send('This is Kyronus Server'))

app.use('/user', require('./Routes/user.route'));

app.use('/planet', require('./Routes/planet.route'));

app.use('/map', require('./Routes/map.route'));
