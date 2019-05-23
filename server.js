const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require("./Config/config.js");
const app = express();
const port = process.env.PORT || 3000;
const url = `mongodb://${config.mongodb.user}:${config.mongodb.password}@${config.mongodb.host}/${config.mongodb.database}`;
const cors = require('cors');
const cookieParser = require('cookie-parser');

mongoose.connect(url, { useNewUrlParser: true });

mongoose.Promise = global.Promise;

app.listen(port, () => console.log('App listening on port ' + port));

app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cookieParser());

app.use('/user', require('./Routes/user'));

app.use('/planet', require('./Routes/planet'));


