const express = require('express')
const router = express.Router()
const github = require('../lib/github.auth')

router.get('/login', github.login)

router.get('/authorize', github.getToken, github.getUser, (req, res, next) => {
  return res.redirect('/profile')
})

router.get('/logout', github.logout)

module.exports = router
