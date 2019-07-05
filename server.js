const express = require('express');
const app = express();

require('dotenv').config()

require('./setup/express')(app);

module.exports = app;