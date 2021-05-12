const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const connectDB = require('./config/db');
connectDB();
const hbs = require('hbs');

// ========== SETTINGS =======================
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.use(
  express.urlencoded({
    extended: false,
  })
);





app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about')
})




app.listen(PORT, () => console.log(`Server running on port ${PORT} `));
