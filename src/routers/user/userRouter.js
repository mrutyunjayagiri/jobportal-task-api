const express = require("express");
const router = new express.Router();

//Middleware
const authMiddleWare = require("../../middleware/auth");

const UserController = require("../../controllers/user/userController");

// Create User
router.post("/users", authMiddleWare, UserController.createUser);
// router.get("/users", authMiddleWare, UserController.createUser);
// router.delete("/users", authMiddleWare, UserController.createUser);

module.exports = router;
