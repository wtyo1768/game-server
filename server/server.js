const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || process.argv[2] || 3000;
const http = require('http');
const server = http.createServer(app); 
const db = (process.env.NODE_ENV.trim() == "development") ? "yo" : "test";
const url = `mongodb+srv://wtyo1768:s124930654@kyronus-dihrd.mongodb.net/${db}?retryWrites=true&w=majority`;

global.io = require('socket.io').listen(server);

mongoose.connect(url, { useNewUrlParser: true, }).catch(err => logger.error(err))

mongoose.Promise = global.Promise;

server.listen(port, () => logger.error(`New App listening on port ${port} in ${process.env.NODE_ENV} `));

app.use('/api', require('./Routes/global.route'));

app.use('/api/user', require('./Routes/signup.route'));

app.use('/api/user', require('./Routes/user.route'));

app.use('/api/planet', require('./Routes/planet.route'));

app.use('/api/map', require('./Routes/map.route'));

app.use('/*' , (req,res) => res.status(404).send('This is Invaild Path'))

require('./Controllers/socket/sock');
