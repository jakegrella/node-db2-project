const express = require('express');
const helmet = require('helmet');

const CarsRouter = require('./cars/car-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', CarsRouter);

module.exports = server;
