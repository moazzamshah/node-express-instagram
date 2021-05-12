const express = require('express');
const router = express.Router();


// login/landingPage

router.get('/', (req, res) => {
  res.render('home')
})


router.get('/about', (req, res) => {
  res.render('about')
})

router.get('/login', (req, res) => {
  res.render('login')
})



module.exports = router;
