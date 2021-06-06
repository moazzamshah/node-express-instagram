const express = require('express');
const router = express.Router();
const User = require('../models/User')


// login/landingPage

router.get('/', (req, res) => {
  res.send(` <h1> Home Page </h1> `)
})

router.get('/user/data', (req, res) => {
  res.json({name: 'it works'})
})

router.post('/user/data', (req, res) => {
  const newUser = new User(req.body);
  newUser.save((error, user) => {
    res.json(user)
    if(error) throw error;
    console.log(user);
  })
})





module.exports = router;
