const express = require('express');
const https = require('https');
const fs = require('fs');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require("./Config/config.js");
var cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 3000;
const url = `mongodb://${config.mongodb.user}:${config.mongodb.password}@${config.mongodb.host}/${config.mongodb.database}`;

mongoose.connect(url, { useNewUrlParser: true });

/*.then(() => {
  console.log("Connected to Database");
  }).catch((err) => {
      console.log("Not Connected to Database ERROR! ", err);
  });*/

/*
const key = fs.readFileSync('/home/wp2018/ssl/private.key')
const cert = fs.readFileSync('/home/wp2018/ssl/certificate.crt')
var opt = {
  key: key,
  cert: cert,
}
 https.createServer(opt, app).listen(port)
 */

app.listen(port, () => console.log('App listening on port ' + port));
app.use(cookieParser());

app.use(express.static(__dirname + '/public'));
var register = require('./Router/register');
var login = require('./Router/login');
mongoose.Promise = global.Promise;

var Passport = require('passport');
const localstrategy = require('./Router/auth/localStrategy');


app.use(Passport.initialize());

//app.use(bodyParser())

Passport.use('local', localstrategy);

app.use(bodyParser.json());

app.use('/user', login)

app.use('/user', register)


