const express = require('express');
const loginUser = require('../controllers/login');
const { validate } = require('../middleware/auth');
const router = new express.Router();

router.post('/',validate,loginUser)

module.exports = router;