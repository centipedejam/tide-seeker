const express = require('express');
const router = express.Router();
const spotsCtrl = require('../controllers/spots')


// All routes start with '/spots' 

//GET '/spots' (index)
router.get('/', spotsCtrl.index);






module.exports = router;


