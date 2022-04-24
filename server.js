require('dotenv').config();

const port = process.env.PORT || 3000;
const express = require("express");
const cors = require('cors');
const morgan = require('morgan');

const app = new express();

//Routes
const animeRoute = require('./routes/api');

//middlewares
app.use(cors());
app.use(morgan('tiny'))
app.use(express.json());

app.use('/api/v1', animeRoute);

app.get("/", (req, res) => {
    res.send('<h1> API Worked !!!!! </h1>');
});

app.listen(port, () => {
    console.log('🚀 Server is running on port ' + port);
});
