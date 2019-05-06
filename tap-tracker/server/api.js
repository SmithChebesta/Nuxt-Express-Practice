const express = require('express')
const router = express.Router();

router.post('/register', (req, res) => {
  res.send({
    message: `Hello Mrs. ${req.body.email} , Thank you for registed with us.`
  })
})

module.exports = router
