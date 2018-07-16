const express  = require('express');
const User     = require('../models/User');
const passport = require('passport');
const router   = express.Router();

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password, (err, user) => {
    if (err) return res.json(err);
      res.json(user);
  });

});

router.get('/login', (req, res, next) => {
  res.render('login')
});

router.post('/login', (req, res, next) => {

});

module.exports = router;
