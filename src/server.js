'use strict';

const express = require('express');
const notFound = require('./middleware/error-handlres/404.js');
const serverError = require('./middleware/error-handlres/500.js');
const authRouter = require('./auth/router.js');
const vOneRouter = require('./api/v1.js');
const vTwoRouter = require('./api/v2.js');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1', vOneRouter);
app.use('/api/v2', vTwoRouter);
app.use(authRouter);

const start = (port) => {
  app.listen(port, () => {
    console.log('The app is listening on PORT: ', port);
  });
};

app.use('*', notFound);
app.use(serverError);

module.exports = {
  app: app,
  start: start,
};
