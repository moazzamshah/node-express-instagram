const express = require('express');
const router = express.Router();
const Person = require('../models/User');



router.get('/login', (req, res) => {
  res.send('login page')
})


router.get('/logout', (req, res) => {
  res.send('LOGOUT OK')
});

module.exports = router;
