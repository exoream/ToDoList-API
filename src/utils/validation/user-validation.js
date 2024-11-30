const { z } = require("zod");

class UserValidation {
    static registerSchema = z.object({
        username: z.string()
            .min(3, "Username must be at least 3 characters long")
            .max(30, "Username cannot exceed 30 characters")
            .nonempty("Username is required"),
        password: z.string()
            .min(6, "Password must be at least 6 characters long")
            .nonempty("Password is required"),
    });

    static loginSchema = z.object({
        username: z.string().nonempty("Username is required"),
        password: z.string().nonempty("Password is required"),
    });
}

module.exports = UserValidation;