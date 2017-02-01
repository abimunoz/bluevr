const request = require('request')
const qs = require('querystring');
const redirectUri = `${process.env.BASE_URL}/auth/callback`
const clientId = process.env.GITHUB_CLIENT_ID
const clientSecret = process.env.GITHUB_CLIENT_SECRET
const state = require('randomstring').generate();
const scope = 'user'

const login = (req, res, next) => {
  const url = 'https://github.com/login/oauth/authorize'
  const queryParams = qs.stringify({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: scope,
    state: state
  });
  return res.redirect(url + '?' + queryParams)
}

const getToken = (req, res, next) => {
  if (state !== req.query.state) return next(new Error('State doesn\'t match'))
  const code = req.query.code
  const url = 'https://github.com/login/oauth/access_token'
  const data = {
    client_id: clientId,
    client_secret: clientSecret,
    code: code,
    redirect_uri: redirectUri,
    state: state
  }
  const options = {
    method: 'POST',
    url: url,
    headers: {'Accept': 'application/json'},
    json: data
  }
  request(options, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      req.session.access_token = body.access_token
      return next()
    } else {
      return next(err)
    }
  })
}

const getUser = (req, res, next) => {
  if (!req.session.access_token) return res.redirect('/')
  const url = 'https://api.github.com/user'
  const options = {
    method: 'GET',
    url: url,
    headers: {
      'Authorization': `token ${req.session.access_token}`,
      'User-Agent': 'Oauth Example'
    }
  }
  request(options, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      const user = JSON.parse(body)
      req.session.user = user
      return next()
    } else {
      return next(err)
    }
  })
}

const logout = (req, res, next) => {
  req.session.access_token = null
  req.session.user = null
  return res.redirect('/')
}

module.exports = {
  login,
  logout,
  getToken,
  getUser
}
