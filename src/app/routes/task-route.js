const express = require("express");
const TaskController = require("../../controller/task-controller");

const taskController = new TaskController();
const router = express.Router();

router.post("/tasks", taskController.addTask.bind(taskController));

router.put("/tasks/:taskId", taskController.updateTask.bind(taskController));

router.delete("/tasks/:taskId", taskController.deleteTask.bind(taskController));

router.get("/tasks/user/:userId", taskController.getUserTasks.bind(taskController));

module.exports = router;
