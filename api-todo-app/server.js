const express = require('express');
const bodyParser = require('body-parser');
const allowCors = require('./src/middlewares/cors');

const PORT = process.env.PORT || 4000;

const indexRoute = require('./src/routes/indexRoute');

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

server.use('/', indexRoute);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});