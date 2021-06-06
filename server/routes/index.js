const express = require('express');
const router = express.Router();


// login/landingPage

router.get('/user/data', (req, res) => {
  res.json({name: 'it works'})
})

router.post('/user/data', (req, res) => {

  // some data from frontend i.e React
  console.log(req.body)
})





module.exports = router;
