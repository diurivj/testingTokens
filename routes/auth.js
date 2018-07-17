const express    = require('express');
const User       = require('../models/User');
const passport   = require('passport');
const genToken   = require('../helpers/jwt').GEN_TOKEN;
const expressjwt = require('express-jwt');
const router     = express.Router();
require('dotenv').config();


const checkAdmin = expressjwt({secret: process.env.TOKEN_SECRET});

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password, (err, user) => {
    if (err) return res.json(err);
      res.json(user);
  });
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err) return res.status(500).send(err);
    if(!user) return res.status(500).send(info);
    res.json({user, access_token: genToken(user)})
  })(req, res, next);
});

router.get('/admin', checkAdmin, (req, res, next) => {
  console.log(req.user);
  if (req.user.role == 'admin') return res.sendStatus(200);
  return res.sendStatus(401);
});

module.exports = router;
