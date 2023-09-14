const express = require('express');
const router = express.Router();
const passport = require('passport');
const spotsCtrl = require('../controllers/spots');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', { title: 'Tide Seeker' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', function (req, res, next) {
  const redirectTo = req.session.redirectTo;
  delete req.session.redirectTo;
  passport.authenticate(
    'google',
    {
      successRedirect: redirectTo || '/spots',
      failureRedirect: '/spots'
    }
  )(req, res, next);
});

router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/');
  });
});

router.get('/api/surfspots', spotsCtrl.getAllSpots);

module.exports = router;
