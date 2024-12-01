const { z } = require("zod");

class TaskValidation {
    static addTaskSchema = z.object({
        title: z.string().min(1, "Title is required"),
        description: z.string().min(1, "Description is required"),
        time: z.string().min(1, "Time is required"),
        priority: z.string().min(1, "Priority is required"),
        category: z.string().min(1, "Category is required"),
        userId: z.number().min(1, "User ID is required"),
    });

    static updateTaskSchema = z.object({
        title: z.string().min(1, "Title is required").optional(),
        description: z.string().min(1, "Description is required").optional(),
        time: z.string().min(1, "Time is required").optional(),
        priority: z.string().min(1, "Priority is required").optional(),
        category: z.string().min(1, "Category is required").optional(),
    });
}

module.exports = TaskValidation;