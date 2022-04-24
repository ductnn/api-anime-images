const express = require('express');
const { anime } = require('../controllers/api');

const route = express.Router();

route.get('/', anime);

module.exports = route 
