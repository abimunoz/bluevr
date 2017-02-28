const express = require('express')
const router = express.Router()
// const text = require('./models/text')

router.get('/', (req, res, next) => {
  res.render('index', {title: 'Home'})
})

module.exports = router
