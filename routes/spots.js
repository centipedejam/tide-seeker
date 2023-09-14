const express = require('express');
const router = express.Router();
const spotsCtrl = require('../controllers/spots')
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/spots' 

//GET '/spots' (index)
router.get('/', spotsCtrl.index);
//GET '/spots/new' (new)
router.get('/new', ensureLoggedIn, spotsCtrl.new);
//GET '/spots/:id' (show)
router.get('/:id', spotsCtrl.show);
//POST '/spots' (create)
router.post('/', ensureLoggedIn, spotsCtrl.create);

module.exports = router;
