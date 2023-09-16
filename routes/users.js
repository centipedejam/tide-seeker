const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/users'

//GET '/users/:id/sessions'
router.get('/:id/sessions', ensureLoggedIn, usersCtrl.showSessions)





module.exports = router;