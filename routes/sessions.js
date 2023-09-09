const express = require('express');
const router = express.Router();
const sessionsCtrl = require('../controllers/sessions');
const ensureLoggedIn = require('../config/ensureLoggedIn');


//all routes start with '/'
router.get('/spots/:id/sessions', sessionsCtrl.index);


module.exports = router;