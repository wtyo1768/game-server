const express = require('express')
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || process.argv[2] || 3000;
const url = `mongodb+srv://wtyo1768:s124930654@kyronus-dihrd.mongodb.net/test?retryWrites=true`;

mongoose.connect(url, { useNewUrlParser: true, })
    .catch((err) => logger.error('error', err))

mongoose.Promise = global.Promise;

app.listen(port, () => logger.info(`New App listening on port ${port} ${process.env.NODE_ENV} `));

app.use(express.static(__dirname + '/server/public'));

app.use(require('./Routes/global.route'));

app.use('/user', require('./Routes/auth.route'));

app.use('/user', require('./Routes/user.route'));

app.use('/planet', require('./Routes/planet.route'));

app.use('/map', require('./Routes/map.route'));