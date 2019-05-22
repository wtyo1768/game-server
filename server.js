const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require("./Config/config.js");
const app = express();
const port = process.env.PORT || 3000;
const url = `mongodb://${config.mongodb.user}:${config.mongodb.password}@${config.mongodb.host}/${config.mongodb.database}`;
const Passport = require('passport');

mongoose.connect(url, { useNewUrlParser: true });

mongoose.Promise = global.Promise;

app.listen(port, () => console.log('App listening on port ' + port));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(Passport.initialize());

Passport.use('local', require('./Middleware/localStrategy'));

app.use('/user', require('./Routes/user'));



