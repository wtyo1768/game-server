const config = require("./Config/config.js");
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const url = `mongodb+srv://wtyo1768:s124930654@kyronus-dihrd.mongodb.net/test?retryWrites=true`;
// const url = 'mongodb://wtyo1768:s124930654@docdb-2019-06-16-14-33-30.cluster-c7jrx8pdmlkx.ap-northeast-2.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0'
const fs = require('fs');
const certFileBuf = fs.readFileSync('./Config/rds-combined-ca-bundle.pem');

mongoose.connect(url, { useNewUrlParser: true/*, sslCA: certFileBuf, ssl: true */})
    .catch(() => console.log('Error in database connecting'))

mongoose.Promise = global.Promise;

app.listen(port, () => console.log('App listening on port ' + port));

app.use(express.static('public'));

const origin = ['http://localhost:8080',
    'http://localhost:3000'
];
const corsOptions = {
    origin: origin,
    credentials: true,
    maxAge: 1728000,
};

app.use(cors(corsOptions));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", origin[0])
    next()
})
app.options("/", cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.text())

app.use(cookieParser());

app.use(function (req, res, next) {
    if (req.method == "GET")
        return next();
    try {
        req.body = JSON.parse(req.body)
    } catch (error) {
        return res.status(500).end();
    }
    next();
})

//require('./Controllers/auth/email.auth').verifyEmail();

app.get('', (req, res) => res.send('This is Kyronus Server'))

app.use('/user', require('./Routes/auth.route'));

app.use('/user', require('./Routes/user.route'));

app.use('/planet', require('./Routes/planet.route'));

app.use('/map', require('./Routes/map.route'));
