
// App analysis

const appInsights = require('applicationinsights');
const config = require("./Config/config.js");
appInsights.setup(config.AzureInsight.instrumentation_key).start();
const telemetry = appInsights.defaultClient;

//App init

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
//const url = `mongodb+srv://wtyo1768:s124930654@kyronus-dihrd.mongodb.net/test?retryWrites=true`
const url = `mongodb://wtyo1768:aO2xZc7fHuSef3bR1gtotCz9MUnCXiO1In1RNF4s1NObi7zi5bAvZWFWXo2ZBaghC7aJsII2MKVt3yaXCkwrRA==@wtyo1768.documents.azure.com:10255/kyronus?ssl=true&replicaSet=globaldb`

mongoose.connect(url, { useNewUrlParser: true })
    .catch(() => console.log('Error in database connecting'))

mongoose.Promise = global.Promise;

app.listen(port, () => console.log('App listening on port ' + port));

app.use(express.static('public'));

const origin = 'http://localhost:8080';
const corsOptions = {
    origin: origin,
    credentials: true,
    maxAge: 1728000,
};
app.use((req, res) => res.header("Access-Control-Allow-Origin", origin))
app.use(cors(corsOptions));

app.options(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.text())

app.use(cookieParser());

app.use(function (req, res, next) {
    if (req.method == "GET" || Object.keys(req.body).length == 0)
        return next();
    console.log('use')
    console.log(req.body)
    req.body = JSON.parse(req.body)
    next();
})

//require('./Controllers/auth/email.auth').verifyEmail();

app.get('', (req, res) => res.send('This is Kyronus Server'))

app.use('/user', require('./Routes/auth.route'));

app.use('/user', require('./Routes/user.route'));

app.use('/planet', require('./Routes/planet.route'));

app.use('/map', require('./Routes/map.route'));
