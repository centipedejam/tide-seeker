const express = require('express');
const router = express.Router();
const passport = require('passport');
const spotsCtrl = require('../controllers/spots');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', { title: 'Surf Seeker' });
});

router.get('/auth/google', passport.authenticate(
  // which passport strategy
  'google',
  {
    scope: ['profile', 'email'],
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/');
  });
});

router.get('/api/surfspots', spotsCtrl.getAllSpots)

module.exports = router;
