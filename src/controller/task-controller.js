const TaskService = require("../service/task-service");
const { successResponse } = require("../utils/response/response");

class TaskController {
    async addTask(req, res, next) {
        try {
            const input = req.body;
            const task = await TaskService.addTask(input);
            return res.status(201).json(successResponse("Task created successfully", task));
        } catch (error) {
            next(error);
        }
    }

    async updateTask(req, res, next) {
        try {
            const { taskId } = req.params;
            const input = req.body;
            const updatedTask = await TaskService.updateTask(Number(taskId), input);
            return res.status(200).json(successResponse("Task updated successfully", updatedTask));
        } catch (error) {
            next(error);
        }
    }

    async deleteTask(req, res, next) {
        try {
            const { taskId } = req.params;
            const message = await TaskService.deleteTask(Number(taskId));
            return res.status(200).json(successResponse(message.message));
        } catch (error) {
            next(error);
        }
    }

    async getUserTasks(req, res, next) {
        try {
            const { userId } = req.params;
            const tasks = await TaskService.getUserTasks(Number(userId));
            return res.status(200).json(successResponse("Tasks retrieved successfully", tasks));
        } catch (error) {
            next(error);
        }
    }
}

module.exports = TaskController;
