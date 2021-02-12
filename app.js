const express = require('express');
const router = require('express').Router();
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/search', require('./Routes/search'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}...`);
});

