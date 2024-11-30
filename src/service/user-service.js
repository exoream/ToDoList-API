const prisma = require("../app/config/config");
const { ResponseError } = require("../utils/response/response");
const Validation = require("../utils/validation/validation");
const UserValidation = require("../utils/validation/user-validation");

class UserService {
    static async register(data) {
        const { username, password } = Validation.validate(UserValidation.registerSchema, data);

        const existingUser = await prisma.user.findUnique({ where: { username } });
        if (existingUser) {
            throw new ResponseError("Username already exists", 400);
        }

        const user = await prisma.user.create({
            data: { username, password },
        });

        return { id: user.id, username: user.username };
    }

    static async login(data) {
        const { username, password } = Validation.validate(UserValidation.loginSchema, data);

        const user = await prisma.user.findUnique({ where: { username } });
        if (!user || user.password !== password) {
            throw new ResponseError("Invalid username or password", 401);
        }

        return { id: user.id, username: user.username };
    }
}

module.exports = UserService;
