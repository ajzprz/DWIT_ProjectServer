const express = require("express");
const { validate } = require("../middleware/auth");
const { createUser } = require("../controllers/register");


const router = new express.Router();

router.post("/", validate, createUser  );

module.exports = router;
