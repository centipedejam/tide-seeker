const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/users'

//GET '/users/:id/sessions'
router.get('/:id/sessions', ensureLoggedIn, usersCtrl.showSessions);
//GET '/users/:id/favorites'
router.get('/:id/favorites', ensureLoggedIn, usersCtrl.showFavorites);
//POST '/users/:id/favorites'
router.post('/:id/favorites', ensureLoggedIn, usersCtrl.create)






module.exports = router;