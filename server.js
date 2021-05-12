const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const connectDB = require('./config/db');
connectDB();
const indexRouter = require('./routes/index')

// ========== SETTINGS =======================
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use('/', indexRouter)










app.listen(PORT, () => console.log(`Server running on port ${PORT} `));
