const express = require('express');
const app = express();
const dotenv = require('dotenv');

// LOAD CONFIG
dotenv.config({path: '.config/config.env'})








const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/about', (req, res) => res.send(' <h1> About Page </h1> '));

app.listen(port, () => console.log(`Example app listening on port port!`));
