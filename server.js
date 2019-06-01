const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const config = require("./Config/config.js");
//const url = `mongodb+srv://wtyo1768:s124930654@kyronus-dihrd.mongodb.net/test?retryWrites=true`
const url = "mongodb://wtyo1768:aO2xZc7fHuSef3bR1gtotCz9MUnCXiO1In1RNF4s1NObi7zi5bAvZWFWXo2ZBaghC7aJsII2MKVt3yaXCkwrRA==@wtyo1768.documents.azure.com:10255/kyronus?ssl=true&replicaSet=globaldb"
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

mongoose.connect(url, { useNewUrlParser: true })
.catch( ()=>console.log('Error in database connecting') )

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
