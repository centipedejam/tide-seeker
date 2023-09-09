const express = require('express');
const router = express.Router();
const sessionsCtrl = require('../controllers/sessions');
const ensureLoggedIn = require('../config/ensureLoggedIn');


//all routes start with '/'

//GET /spots/:id/sessions (index)
router.get('/spots/:id/sessions', sessionsCtrl.index);

//GET sessions/:id (show)
router.get('/sessions/:id', sessionsCtrl.show);


module.exports = router;