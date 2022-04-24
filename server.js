require('dotenv').config();

const port = process.env.PORT || 3000;
const express = require("express");


const app = new express();

app.get("/", (req, res) => {
    res.send('<h1> API Worked !!!!! </h1>');
});

app.listen(port, () => {
    console.log('🚀 Server is running on port ' + port);
});
