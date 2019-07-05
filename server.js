const express = require('express');
const app = express();

require('dotenv').config()

require('./setup/express')(app);

const database = require('./setup/database');

module.exports = app;