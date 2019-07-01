const config = require("./config/config");
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || process.argv[2] || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const url = `mongodb+srv://wtyo1768:s124930654@kyronus-dihrd.mongodb.net/test?retryWrites=true`;
// const url = 'mongodb://wtyo1768:s124930654@ec2-3-218-207-159.compute-1.amazonaws.com:27017/Kyronus';
// const url = 'mongodb://kyronus-root:rFk8KCOyLbPmxMd8qoPzApRtPik1WAWY1j3jffAvXcUoTIU1PU2pxyXxHWeGU4IaArkVMIGXF8H9c1lk4AQjcUA==@kyronus-root.documents.azure.com:10255/test?ssl=true&replicaSet=globaldb'

mongoose.connect(url, { useNewUrlParser: true, })
    .catch((err) => console.log(err))

mongoose.Promise = global.Promise;

app.listen(port, () => console.log('App listening on port ' + port));

app.use(express.static('server/public'));

const origin = ['https://kyronus.azurewebsites.net','http://localhost:8080',
    'http://localhost:3000'
];
const corsOptions = {
    origin: origin,
    credentials: true,
    maxAge: 1728000,
};

app.use(cors(corsOptions));
app.use((req, res, next) => {
    // res.header("Access-Control-Allow-Origin", origin[0])
    res.header("Access-Control-Allow-Origin" , req.headers.origin)
    console.log('host: '+ req.headers.host)
    next()
})
app.options("/", cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.text());

app.use(cookieParser());

app.use(function (req, res, next) {
    if (req.method == "GET" || Object.keys(req.body).length == 0)
        return next();
    try {
        req.body = JSON.parse(req.body)
    } catch (error) {
        // console.log('---' + error + '----')
    }
    next();
})

//require('./Controllers/auth/email.auth').verifyEmail();

app.get('', (req, res) => {
    res.send('This is Kyronus Server!');
    // console.log('From : ' + port)
})

app.use('/user', require('./Routes/auth.route'));

app.use('/user', require('./Routes/user.route'));

app.use('/planet', require('./Routes/planet.route'));

app.use('/map', require('./Routes/map.route'));