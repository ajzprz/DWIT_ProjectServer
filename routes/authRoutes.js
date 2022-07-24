const express = require('express');
const { loginUser, createUser, logOutUser } = require('../controllers/authControllers');
const { validateLogin, validateRegister } = require('../middleware/auth');
const router = new express.Router();

router.post('/login',validateLogin,loginUser)
router.post("/register", validateRegister, createUser);
router.post('/logout',logOutUser)

module.exports = router;