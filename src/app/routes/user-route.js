const express = require("express");
const UserController = require("../../controller/user-controller");

const userController = new UserController();

const router = express.Router();

router.post('/register', userController.register.bind(userController));

router.post('/login', userController.login.bind(userController));

module.exports = router;