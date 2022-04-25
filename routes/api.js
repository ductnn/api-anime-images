const express = require('express');
const { getAnimeImages } = require('../controllers/api');

const route = express.Router();

route.get('/', getAnimeImages);

module.exports = route 
