const express = require("express");
const router = new express.Router();

const AuthController = require("../../controllers/auth/authController");

// User Login
router.post("/auth/login", AuthController.onLogin);

module.exports = router;
