const prisma = require("../app/config/config");
const { ResponseError } = require("../utils/response/response");
const Validation = require("../utils/validation/validation");
const TaskValidation = require("../utils/validation/task-validation");

class TaskService {
    static async addTask(data) {
        const validData = Validation.validate(TaskValidation.addTaskSchema, data);

        const task = await prisma.task.create({
            data: {
                title: validData.title,
                description: validData.description,
                date: new Date(validData.date),
                time: validData.time,
                priority: validData.priority,
                category: validData.category,
                userId: validData.userId,
            },
        });

        return task;
    }

    static async updateTask(taskId, data) {
        const validData = Validation.validate(TaskValidation.updateTaskSchema, data);

        const existingTask = await prisma.task.findUnique({ where: { id: taskId } });
        if (!existingTask) {
            throw new ResponseError("Task not found", 404);
        }

        const updatedTask = await prisma.task.update({
            where: { id: taskId },
            data: validData,
        });

        return updatedTask;
    }

    static async deleteTask(taskId) {
        const existingTask = await prisma.task.findUnique({ where: { id: taskId } });
        if (!existingTask) {
            throw new ResponseError("Task not found", 404);
        }

        await prisma.task.delete({ where: { id: taskId } });

        return { message: "Task deleted successfully" };
    }

    static async getUserTasks(userId) {
        const tasks = await prisma.task.findMany({
            where: { userId },
        });

        return tasks;
    }
}

module.exports = TaskService;
