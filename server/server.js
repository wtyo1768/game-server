const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || process.argv[2] || 3000;
const http = require('http');
const server = http.createServer(app); 
const db = (process.env.NODE_ENV.trim() == "development") ? "yo" : "test";
const url = `mongodb+srv://wtyo1768:s124930654@kyronus-dihrd.mongodb.net/${db}?retryWrites=trueb`;

global.io = require('socket.io').listen(server);

mongoose.connect(url, { useNewUrlParser: true, }).catch(err => logger.error(err))

mongoose.Promise = global.Promise;

server.listen(port, () => logger.info(`New App listening on port ${port} in ${process.env.NODE_ENV} `));

app.use(express.static(__dirname + '/public'));

app.use(require('./Routes/global.route'));

app.use('/user', require('./Routes/signup.route'));

app.use('/user', require('./Routes/user.route'));

app.use('/planet', require('./Routes/planet.route'));

app.use('/map', require('./Routes/map.route'));

app.use('/*' , (req,res) => res.send('Worth Path'))

require('./Controllers/socket/sock');