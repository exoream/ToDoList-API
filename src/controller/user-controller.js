const UserService = require("../service/user-service");
const { successResponse } = require("../utils/response/response");

class UserController {
    async register(req, res, next) {
        try {
            const input = req.body;
            const data = await UserService.register(input);
            return res.status(201).json(successResponse("User registered successfully", data));
        } catch (error) {
            next(error);
        }
    }

    async login(req, res, next) {
        try {
            const input = req.body;
            const data = await UserService.login(input);
            return res.status(200).json(successResponse("User logged in successfully", data));
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;
