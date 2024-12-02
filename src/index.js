const express = require("express");
const userRoute = require("./app/routes/user-route");
const taskRoute = require("./app/routes/task-route");
const cors = require("cors")
const errorMiddleware = require("./utils/middleware/error-middleware");

const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.json({
        status: true,
        message: "Todolist",
    });
});

app.use("", userRoute);
app.use("", taskRoute);

app.use(errorMiddleware);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});