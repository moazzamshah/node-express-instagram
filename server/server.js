const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const connectDB = require('./config/db');
connectDB();
const multer = require('multer');
const indexRouter = require('./routes/index')
const userRouter = require('./routes/userRouter')
const cors = require('cors');
const session = require('express-session');

// ========== SETTINGS =======================
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(cors());

app.use(session({
  secret: 'key that will sign the cookie',
  resave: false,
  saveUninitialized: false
}))

app.get('/testsession', (req, res) => {
  console.log(req.session)
  res.send('Hello session Tutorial')
})





// =============== Images upload MULTER =============
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage: fileStorageEngine });


app.post('/single', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.send('Single file uploaded successfully')
})

app.post('/multiple', upload.array('images', 3), (req, res) => {
  console.log(req.files);
  res.send('multiple files uploaded successfully.')
})




app.use('/', indexRouter);
app.use('/user', userRouter);












app.listen(PORT, () => console.log(`Server running on port ${PORT} `));
