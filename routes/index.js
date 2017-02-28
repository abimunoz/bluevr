const express = require('express')
const router = express.Router()
// const Entity = require('./models/entity')

// CREATE
router.post('/create', (req, res, next) => {
  if (err) {
    next(err)
  } else {
    Entity.create({
      text: text,
      geometry: geometry,
      color: color,
      x: x,
      y: y,
      z: z
    })
    res.redirect('/');
  }
})

// READ
router.get('/', (req, res, next) => {
  if (err) {
    next(err)
  } else {
    res.render('index', {title: 'Home'})
  }
})

module.exports = router
